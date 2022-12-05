import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

/**
 * Account Entity
 */
@Entity({ name: 'accounts' })
export class Account extends BaseEntity {
    /**
     * Column "person_id"
     */
    @Column({ type: 'uuid' })
    personId: string;

    /**
     * Column "balance"
     */
    @Column({ type: 'double precision' })
    balance: number;

    /**
     * Column "daily_withdrawal_limit"
     */
    @Column({ type: 'double precision' })
    dailyWithdrawalLimit: number;

    /**
     * Column "active"
     */
    @Column({ type: 'boolean' })
    active: boolean;

    /**
     * Column "account_type"
     */
    @Column({ type: 'integer' })
    accountType: number;

    /**
     * Column "create_date"
     */
    @Column({ type: 'date' })
    createDate: string;
}
