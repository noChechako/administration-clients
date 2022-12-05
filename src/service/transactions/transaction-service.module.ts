import { Module } from '@nestjs/common';
import { TransactionRepositoryModule } from '../../repository/transactions/transaction-repository.module';
import { TransactionService } from './transaction.service';
import { ClientRepositoryModule } from '../../repository/clients/client-repository.module';

@Module({
    imports: [TransactionRepositoryModule, ClientRepositoryModule],
    providers: [TransactionService],
    exports: [TransactionService],
})
export class TransactionServiceModule {}
