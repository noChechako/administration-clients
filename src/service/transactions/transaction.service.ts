import {Injectable} from '@nestjs/common';
import {TransactionRepositoryService} from "../../repository/transactions/transaction-repository.service";
import {Transaction} from "../../model/transaction.entity";

@Injectable()
export class TransactionService {
    constructor(protected readonly transactionRepository: TransactionRepositoryService) {
    }

    public async findAllById(accountId: string): Promise<Transaction[]> {
        return this.transactionRepository.findAllById(accountId);
    }
}
