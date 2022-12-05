import { Module } from '@nestjs/common';
import { TransactionController } from './transaction.controller';
import { TransactionServiceModule } from '../../service/transactions/transaction-service.module';

@Module({
    imports: [TransactionServiceModule],
    controllers: [TransactionController],
})
export class TransactionControllerModule {}
