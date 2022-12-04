import {Module} from '@nestjs/common';
import {AccountController} from "./account.controller";
import {AccountServiceModule} from "../../service/accounts/account-service.module";
import {ThrottlerGuard, ThrottlerModule} from "@nestjs/throttler";
import {APP_GUARD} from "@nestjs/core";
import {DAY_IN_SEC} from "../../utils/constans/constans";
import {configService} from "../../config/config.service";

@Module({
    imports: [ThrottlerModule.forRoot({
        ttl: DAY_IN_SEC,
        limit: Number(configService.getLimitBalanceCheck()),
    }), AccountServiceModule],
    controllers: [AccountController],
    providers: [{
        provide: APP_GUARD,
        useClass: ThrottlerGuard
    }
    ]
})
export class AccountControllerModule {
}
