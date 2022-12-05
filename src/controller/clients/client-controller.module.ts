import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { ClientServiceModule } from '../../service/clients/client-service.module';

@Module({
    imports: [ClientServiceModule],
    controllers: [ClientController],
})
export class ClientControllerModule {}
