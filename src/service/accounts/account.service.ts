import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Account} from "../../model/account.entity";
import {AccountCreateDto} from "../../controller/accounts/dto/request/account.create.dto";
import camelCaseToSnakeCase from "../../utils/camel-case-to-snake-case";
import {BalanceRefillUpdateDto} from "../../controller/accounts/dto/request/balance-refill.update.dto";
import {GetBalanceDto} from "../../controller/accounts/dto/response/get-balance.dto";

@Injectable()
export class AccountService {
    constructor(@InjectRepository(Account) private readonly repo: Repository<Account>) {
    }

    public async getAll() {
        return this.repo.find();
    }

    public async createAccount(accountCreateDto: AccountCreateDto): Promise<void> {
        await this.repo.insert(camelCaseToSnakeCase(accountCreateDto))
        return void 0;
    }

    public async increaseBalance(id: string, balanceRefillUpdateDto: BalanceRefillUpdateDto): Promise<void> {
        const account = await this.repo.findOneBy({id});
        account.balance += balanceRefillUpdateDto.balance;
        await this.repo.save(account);
        return void 0;
    }

    public async decreaseBalance(id: string, balanceRefillUpdateDto: BalanceRefillUpdateDto): Promise<void> {
        const account = await this.repo.findOneBy({id});
        account.balance -= balanceRefillUpdateDto.balance;
        await this.repo.save(account);
        return void 0;
    }

    public async getBalance(id: string): Promise<GetBalanceDto> {
        const account = await this.repo.findOneBy({id});
        return {
            balance:account.balance
        };
    }
}
