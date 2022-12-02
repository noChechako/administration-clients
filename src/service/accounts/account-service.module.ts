import { Module } from '@nestjs/common';
import {AccountService} from "./account.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Account} from "../../model/account.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Account])],
    providers: [ AccountService ],
    exports: [ AccountService ],
})
export class AccountServiceModule {}
