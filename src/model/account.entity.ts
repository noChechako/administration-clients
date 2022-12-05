import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'accounts' })
export class Account extends BaseEntity {
    @Column({ type: 'uuid' })
    personId: string;

    @Column({ type: 'double precision' })
    balance: number;

    @Column({ type: 'double precision' })
    dailyWithdrawalLimit: number;

    @Column({ type: 'boolean' })
    active: boolean;

    @Column({ type: 'integer' })
    accountType: number;

    @Column({ type: 'date' })
    createDate: string;
}
