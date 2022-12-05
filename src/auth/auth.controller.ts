import { Controller, Post, UseGuards, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller()
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('auth/login')
    async login(@Body() body: LoginDto): Promise<any> {
        return this.authService.login(body);
    }
}
