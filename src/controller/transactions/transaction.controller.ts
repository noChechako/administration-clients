import {Controller, Get} from '@nestjs/common';

/**
 * Controller class for 'transactions' endpoint
 */
@Controller('transactions')
export class TransactionController {
    /**
     * Constructor
     */
    constructor() {}

    @Get('/')
    async getTransactions(): Promise<string> {
        return 'hello';
    }
}
