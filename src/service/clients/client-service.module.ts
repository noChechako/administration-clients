import { Module } from '@nestjs/common';
import {ClientService} from "./client.service";
import {ClientRepositoryModule} from "../../repository/clients/client-repository.module";

@Module({
    imports: [ClientRepositoryModule],
    providers: [ ClientService ],
    exports: [ ClientService ],
})
export class ClientServiceModule {}
