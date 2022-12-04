import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'transactions' })
export class Transaction extends BaseEntity {

    @Column({type: 'uuid'})
    accountId: string;

    @Column({ type: 'double precision' })
    value: number;

    @Column({ type: 'date' })
    transactionDate: string;
}
