import {Injectable, InternalServerErrorException} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Between, LessThan, Repository} from "typeorm";
import {Transaction} from "../../model/transaction.entity";

@Injectable()
export class TransactionRepositoryService {
    /**
     * Constructor
     */
    constructor(@InjectRepository(Transaction) private readonly transactionRepository: Repository<Transaction>) {
    }

    public async save(transaction: Transaction): Promise<Transaction> {
        try {
            return this.transactionRepository.save(transaction);
        } catch (e) {
            throw new InternalServerErrorException()
        }
    }

    public async findAllByDay(accountId: string, beforeOneDayDate: string, afterOneDayDate: string): Promise<Transaction[]> {
        try {
            return this.transactionRepository.find(
                {
                    where: {
                        accountId,
                        value: LessThan(0),
                        transactionDate: Between(
                            beforeOneDayDate,
                            afterOneDayDate)
                    }
                }
            )
        } catch (e) {
            throw new InternalServerErrorException()
        }
    }

    public async findAllById(accountId: string): Promise<Transaction[]> {
        try {
            return this.transactionRepository.find(
                {
                    where: {
                        accountId
                    }
                }
            )
        } catch (e) {
            throw new InternalServerErrorException()
        }
    }
}
