import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { configService } from '../config/config.service';
import { JwtStrategy } from './jwt/jwt.strategy';
import { ClientControllerModule } from '../controller/clients/client-controller.module';
import { ClientServiceModule } from '../service/clients/client-service.module';

@Module({
    imports: [
        ClientControllerModule,
        PassportModule,
        ClientServiceModule,
        JwtModule.register({
            secret: configService.getJwtSecretKey(),
            signOptions: { expiresIn: configService.getJwtExpire() },
        }),
    ],
    providers: [AuthService, JwtStrategy],
    exports: [AuthService],
})
export class AuthModule {}
