import {ConflictException, NotFoundException, Injectable} from '@nestjs/common';
import {Account} from "../../model/account.entity";
import {AccountCreateDto} from "../../controller/accounts/dto/request/account.create.dto";
import {BalanceRefillUpdateDto} from "../../controller/accounts/dto/request/balance-refill.update.dto";
import {GetBalanceDto} from "../../controller/accounts/dto/response/get-balance.dto";
import {ChangeBalanceTypeEnum} from "../../utils/enums/change-balance-type.enum";
import {AccountRepositoryService} from "../../repository/accounts/account-repository.service";

@Injectable()
export class AccountService {
    constructor(protected readonly accountRepository: AccountRepositoryService) {
    }

    public async createAccount(accountCreateDto: AccountCreateDto): Promise<Account> {
        const savedUser = await this.accountRepository.save(accountCreateDto);
        return savedUser;
    }

    public async changeBalance(id: string, type: ChangeBalanceTypeEnum, balanceRefillUpdateDto: BalanceRefillUpdateDto): Promise<Account> {
        const account = await this.accountRepository.findOne(id);

        if (!account) {
            throw new NotFoundException(`Account with id:${id} not found`);
        }

        switch (type) {
            case ChangeBalanceTypeEnum.INCREASE:
                account.balance += balanceRefillUpdateDto.balance;
                break;
            case ChangeBalanceTypeEnum.DECREASE:
                if (account.balance - balanceRefillUpdateDto.balance < 0) {
                    throw new ConflictException(`Balance cannot be less than 0`);
                }
                account.balance -= balanceRefillUpdateDto.balance;
                break;
            default:
                break;
        }

        const updatedAccount = await this.accountRepository.save(account);
        return Object.assign(account, updatedAccount);
    }

    public async getBalance(id: string): Promise<GetBalanceDto> {
        const account = await this.accountRepository.findOne(id);

        if (!account) {
            throw new NotFoundException(`Account with id:${id} not found`);
        }

        return {
            balance:account.balance
        };
    }
}
