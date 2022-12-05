import {Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put} from '@nestjs/common';
import {ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOperation} from "@nestjs/swagger";
import {ClientService} from "../../service/clients/client.service";
import {ClientCreateDto} from "./dto/request/client.create.dto";
import {Client} from "../../model/client.entity";
import {ClientUpdateDto} from "./dto/request/client.update.dto";

/**
 * Controller class for 'clients' endpoint
 */
@Controller('clients')
export class ClientController {
    /**
     * Constructor
     */
    constructor(private readonly clientService: ClientService) {}

    @ApiOperation({ summary: 'Create client' })
    @ApiInternalServerErrorResponse()
    @Post('/')
    async createAccount(@Body() clientCreateDto: ClientCreateDto): Promise<Client> {
        return this.clientService.createClient(clientCreateDto);
    }

    @ApiOperation({ summary: 'Get client by id' })
    @ApiNotFoundResponse()
    @ApiInternalServerErrorResponse()
    @Get('/:clientId')
    async getClient(@Param('clientId', ParseUUIDPipe) clientId: string): Promise<Client> {
        return this.clientService.getClient(clientId);
    }

    @ApiOperation({ summary: 'Update client by id' })
    @ApiNotFoundResponse()
    @ApiInternalServerErrorResponse()
    @Put('/:clientId')
    async updateClient(@Param('clientId', ParseUUIDPipe) clientId: string,
                       @Body() clientUpdateDto: ClientUpdateDto): Promise<Client> {
        return this.clientService.updateClient(clientId, clientUpdateDto);
    }

    @ApiOperation({ summary: 'Delete client be id' })
    @ApiNotFoundResponse()
    @ApiInternalServerErrorResponse()
    @Delete('/:clientId')
    async deleteClient(@Param('clientId', ParseUUIDPipe) clientId: string): Promise<void> {
        return this.clientService.deleteClient(clientId);
    }
}
