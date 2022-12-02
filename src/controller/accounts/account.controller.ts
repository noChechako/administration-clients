import {Body, Controller, Get, Param, ParseUUIDPipe, Post} from '@nestjs/common';
import {AccountService} from "../../service/accounts/account.service";
import {AccountCreateDto} from "./dto/request/account.create.dto";
import {BalanceRefillUpdateDto} from "./dto/request/balance-refill.update.dto";
import {GetBalanceDto} from "./dto/response/get-balance.dto";

/**
 * Controller class for 'accounts' endpoint
 */
@Controller('accounts')
export class AccountController {
    /**
     * Constructor
     */
    constructor(private readonly accountService: AccountService) {}

    @Get('/')
    async getAccounts(): Promise<any> {
        return this.accountService.getAll();
    }

    @Post('/')
    async createAccount(@Body() accountCreateDto: AccountCreateDto): Promise<void> {
        return this.accountService.createAccount(accountCreateDto);
    }

    @Post('/balance-refill/:id')
    async increaseBalance(@Param('id', ParseUUIDPipe) id: string, @Body() balanceRefillUpdateDto: BalanceRefillUpdateDto): Promise<void> {
        return this.accountService.increaseBalance(id, balanceRefillUpdateDto);
    }

    @Post('/decrease-refill/:id')
    async decreaseBalance(@Param('id', ParseUUIDPipe) id: string, @Body() balanceRefillUpdateDto: BalanceRefillUpdateDto): Promise<void> {
        return this.accountService.decreaseBalance(id, balanceRefillUpdateDto);
    }

    @Get('/get-balance/:id')
    async getBalance(@Param('id', ParseUUIDPipe) id: string): Promise<GetBalanceDto> {
        return this.accountService.getBalance(id);
    }
}
