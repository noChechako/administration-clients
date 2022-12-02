import {Controller, Get} from '@nestjs/common';

/**
 * Controller class for 'clients' endpoint
 */
@Controller('clients')
export class ClientController {
    /**
     * Constructor
     */
    constructor() {}

    @Get('/')
    async getClients(): Promise<string> {
        return 'hello';
    }
}
