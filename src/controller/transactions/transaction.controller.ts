import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { Transaction } from '../../model/transaction.entity';
import { TransactionService } from '../../service/transactions/transaction.service';
import {
    ApiInternalServerErrorResponse,
    ApiOperation,
    ApiTags,
} from '@nestjs/swagger';

/**
 * Controller class for 'transactions' endpoint
 */
@ApiTags('Transactions')
@Controller('transactions')
export class TransactionController {
    /**
     * Constructor
     */
    constructor(private readonly transactionService: TransactionService) {}

    /**
     * Get transactions
     * @param accountId Account id string
     */
    @ApiOperation({ summary: 'Get transactions' })
    @ApiInternalServerErrorResponse()
    @Get('/:accountId')
    async getTransactions(
        @Param('accountId', ParseUUIDPipe) accountId: string,
    ): Promise<Transaction[]> {
        return this.transactionService.findAllById(accountId);
    }
}
