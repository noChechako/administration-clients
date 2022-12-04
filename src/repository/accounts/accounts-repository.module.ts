import { Module } from '@nestjs/common';
import {AccountRepositoryService} from "./account-repository.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Account} from "../../model/account.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Account])],
    providers: [ AccountRepositoryService ],
    exports: [ AccountRepositoryService ],
})
export class AccountsRepositoryModule {}
