import {Module} from '@nestjs/common';
import {AccountControllerModule} from "./controller/accounts/account-controller.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {configService} from "./config/config.service";
import {TransactionControllerModule} from "./controller/transactions/transaction-controller.module";
import {ClientControllerModule} from "./controller/clients/client-controller.module";

@Module({

    imports: [
        TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
        AccountControllerModule,
        TransactionControllerModule,
        ClientControllerModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
