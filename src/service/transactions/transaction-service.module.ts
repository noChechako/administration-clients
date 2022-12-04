import { Module } from '@nestjs/common';
import {TransactionRepositoryModule} from "../../repository/transactions/transaction-repository.module";
import {TransactionService} from "./transaction.service";

@Module({
    imports: [TransactionRepositoryModule],
    providers: [ TransactionService ],
    exports: [ TransactionService ],
})
export class TransactionServiceModule {}
