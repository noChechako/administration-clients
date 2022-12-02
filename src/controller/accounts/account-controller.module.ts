import { Module } from '@nestjs/common';
import {AccountController} from "./account.controller";
import {AccountServiceModule} from "../../service/accounts/account-service.module";

@Module({
    imports: [AccountServiceModule],
    controllers: [ AccountController ],
})
export class AccountControllerModule {}
