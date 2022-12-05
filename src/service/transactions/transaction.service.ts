import { Injectable } from '@nestjs/common';
import { TransactionRepositoryService } from '../../repository/transactions/transaction-repository.service';
import { Transaction } from '../../model/transaction.entity';

/**
 * Service class for 'transaction' controller
 */
@Injectable()
export class TransactionService {
    constructor(
        protected readonly transactionRepository: TransactionRepositoryService,
    ) {}

    /**
     * Get transaction by account id
     * @param accountId Account id string
     */
    public async findAllById(accountId: string): Promise<Transaction[]> {
        return this.transactionRepository.findAllById(accountId);
    }
}
