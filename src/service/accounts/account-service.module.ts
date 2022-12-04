import { Module } from '@nestjs/common';
import {AccountService} from "./account.service";
import {AccountsRepositoryModule} from "../../repository/accounts/accounts-repository.module";

@Module({
    imports: [AccountsRepositoryModule],
    providers: [ AccountService ],
    exports: [ AccountService ],
})
export class AccountServiceModule {}
