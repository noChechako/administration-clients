import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'accounts' })
export class Account extends BaseEntity {

    @Column({type: 'uuid'})
    person_id: string;

    @Column({ type: 'double precision' })
    balance: number;

    @Column({ type: 'double precision' })
    daily_withdrawal_limit: number;

    @Column({ type: 'boolean' })
    active: boolean;

    @Column({ type: 'integer' })
    account_type: number;

    @Column({ type: 'date' })
    create_date: string;

}
