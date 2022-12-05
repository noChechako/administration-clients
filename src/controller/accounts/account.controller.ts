import {
    Body,
    Controller,
    Get,
    Param,
    ParseUUIDPipe,
    Post,
    Put,
    Query,
} from '@nestjs/common';
import { AccountService } from '../../service/accounts/account.service';
import { AccountCreateDto } from './dto/request/account.create.dto';
import { BalanceRefillUpdateDto } from './dto/request/balance-refill.update.dto';
import { GetBalanceDto } from './dto/response/get-balance.dto';
import { Account } from '../../model/account.entity';
import {
    ApiInternalServerErrorResponse,
    ApiNotFoundResponse,
    ApiOperation,
    ApiQuery,
    ApiTags,
} from '@nestjs/swagger';
import { ChangeBalanceTypeEnum } from '../../utils/enums/change-balance-type.enum';
import { SkipThrottle } from '@nestjs/throttler';

/**
 * Controller class for 'accounts' endpoint
 */
@ApiTags('Accounts')
@SkipThrottle()
@Controller('accounts')
export class AccountController {
    /**
     * Constructor
     */
    constructor(private readonly accountService: AccountService) {}

    @ApiOperation({ summary: 'Create account' })
    @ApiInternalServerErrorResponse()
    @Post('/')
    async createAccount(
        @Body() accountCreateDto: AccountCreateDto,
    ): Promise<Account> {
        return this.accountService.createAccount(accountCreateDto);
    }

    @ApiOperation({ summary: 'Change balance' })
    @ApiNotFoundResponse()
    @ApiInternalServerErrorResponse()
    @ApiQuery({ name: 'type', enum: ChangeBalanceTypeEnum })
    @Put('/:id/change-balance')
    async increaseBalance(
        @Param('id', ParseUUIDPipe) id: string,
        @Query('type') type: ChangeBalanceTypeEnum,
        @Body() balanceRefillUpdateDto: BalanceRefillUpdateDto,
    ): Promise<Account> {
        return this.accountService.changeBalance(
            id,
            type,
            balanceRefillUpdateDto,
        );
    }

    @ApiOperation({ summary: 'Change status' })
    @ApiNotFoundResponse()
    @ApiInternalServerErrorResponse()
    @Put('/:id/change-status')
    async changeStatus(
        @Param('id', ParseUUIDPipe) id: string,
        @Query('active') active: boolean,
    ): Promise<Account> {
        return this.accountService.changeStatus(id, active);
    }

    @ApiOperation({ summary: 'Get account balance' })
    @ApiNotFoundResponse()
    @ApiInternalServerErrorResponse()
    @SkipThrottle(false)
    @Get('/:id/get-balance')
    async getBalance(
        @Param('id', ParseUUIDPipe) id: string,
    ): Promise<GetBalanceDto> {
        return this.accountService.getBalance(id);
    }
}
