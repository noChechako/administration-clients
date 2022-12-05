import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

/**
 * Transaction Entity
 */
@Entity({ name: 'transactions' })
export class Transaction extends BaseEntity {
    /**
     * Column "account_id"
     */
    @Column({ type: 'uuid' })
    accountId: string;

    /**
     * Column "value"
     */
    @Column({ type: 'double precision' })
    value: number;

    /**
     * Column "transaction_date"
     */
    @Column({ type: 'date' })
    transactionDate: string;
}
