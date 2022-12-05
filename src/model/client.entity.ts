import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'clients' })
export class Client extends BaseEntity {

    @Column({type: 'varchar'})
    name: string;

    @Column({ type: 'varchar' })
    document: string;

    @Column({ type: 'date' })
    birthDate: string;

}
