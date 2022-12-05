import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from '../../model/client.entity';
import { ClientCreateDto } from '../../controller/clients/dto/request/client.create.dto';

@Injectable()
export class ClientRepositoryService {
    /**
     * Constructor
     */
    constructor(
        @InjectRepository(Client)
        private readonly clientRepository: Repository<Client>,
    ) {}

    public async save(client: ClientCreateDto | Client): Promise<Client> {
        try {
            return this.clientRepository.save(client);
        } catch (e) {
            throw new InternalServerErrorException();
        }
    }

    public async findOne(id: string): Promise<Client | null> {
        try {
            return await this.clientRepository.findOneByOrFail({ id });
        } catch (e) {
            return null;
        }
    }

    public async delete(id: string): Promise<void> {
        try {
            await this.clientRepository.delete(id);
        } catch (e) {
            return null;
        }
    }
}
