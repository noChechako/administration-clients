import {Controller, Get, Param, ParseUUIDPipe} from '@nestjs/common';
import {Transaction} from "../../model/transaction.entity";
import {TransactionService} from "../../service/transactions/transaction.service";

/**
 * Controller class for 'transactions' endpoint
 */
@Controller('transactions')
export class TransactionController {
    /**
     * Constructor
     */
    constructor(private readonly transactionService: TransactionService) {}

    @Get('/:accountId')
    async getTransactions(@Param('accountId', ParseUUIDPipe) accountId: string,): Promise<Transaction[]> {
        return this.transactionService.findAllById(accountId);
    }
}
