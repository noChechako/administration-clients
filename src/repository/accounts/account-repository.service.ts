import {Injectable, InternalServerErrorException} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Account} from "../../model/account.entity";
import {Repository} from "typeorm";
import {AccountCreateDto} from "../../controller/accounts/dto/request/account.create.dto";

@Injectable()
export class AccountRepositoryService {
    /**
     * Constructor
     */
    constructor(@InjectRepository(Account) private readonly repo: Repository<Account>) {
    }

    public async save(accountCreateDto: AccountCreateDto | Account): Promise<Account> {
        try {
            return this.repo.save(accountCreateDto);
        } catch (e) {
            throw new InternalServerErrorException()
        }
    }

    public async findOne(id: string): Promise<Account | null> {
        try {
            return await this.repo.findOneByOrFail({id});
        } catch (e) {
            return null;
        }
    }
}
