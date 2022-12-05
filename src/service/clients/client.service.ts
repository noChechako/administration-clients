import { Injectable, NotFoundException } from '@nestjs/common';
import { Client } from '../../model/client.entity';
import { ClientCreateDto } from '../../controller/clients/dto/request/client.create.dto';
import { ClientRepositoryService } from '../../repository/clients/client-repository.service';
import { ClientUpdateDto } from '../../controller/clients/dto/request/client.update.dto';

/**
 * Service class for 'client' controller
 */
@Injectable()
export class ClientService {
    constructor(protected readonly clientRepository: ClientRepositoryService) {}

    /**
     * Create client
     * @param clientCreateDto ClientCreateDto object
     */
    public async createClient(
        clientCreateDto: ClientCreateDto,
    ): Promise<Client> {
        const savedClient = await this.clientRepository.save(clientCreateDto);
        return savedClient;
    }

    /**
     * Get client
     * @param clientId Client id string
     */
    public async getClient(clientId: string): Promise<Client> {
        const client = await this.clientRepository.findOne(clientId);

        if (!client) {
            throw new NotFoundException(`Client with id:${clientId} not found`);
        }

        return client;
    }

    /**
     * Update client
     * @param clientId Client id string
     * @param clientUpdateDto ClientUpdateDto object
     */
    public async updateClient(
        clientId: string,
        clientUpdateDto: ClientUpdateDto,
    ): Promise<Client> {
        const client = await this.clientRepository.findOne(clientId);

        if (!client) {
            throw new NotFoundException(`Client with id:${clientId} not found`);
        }

        const updatedClient = await this.clientRepository.save(
            Object.assign(client, clientUpdateDto),
        );
        return updatedClient;
    }

    /**
     * Delete client
     * @param clientId Client id string
     */
    public async deleteClient(clientId: string): Promise<void> {
        const client = await this.clientRepository.findOne(clientId);

        if (!client) {
            throw new NotFoundException(`Client with id:${clientId} not found`);
        }

        await this.clientRepository.delete(clientId);
    }
}
