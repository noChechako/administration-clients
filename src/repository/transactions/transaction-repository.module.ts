import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from '../../model/transaction.entity';
import { TransactionRepositoryService } from './transaction-repository.service';

@Module({
    imports: [TypeOrmModule.forFeature([Transaction])],
    providers: [TransactionRepositoryService],
    exports: [TransactionRepositoryService],
})
export class TransactionRepositoryModule {}
