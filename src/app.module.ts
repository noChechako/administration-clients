import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountControllerModule } from "./controller/accounts/account-controller.module";
import { TransactionControllerModule } from "./controller/transactions/transaction-controller.module";
import { ClientControllerModule } from "./controller/clients/client-controller.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {configService} from "./config/config.service";

@Module({

  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
      ClientControllerModule, AccountControllerModule, TransactionControllerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
