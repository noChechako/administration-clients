import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

/**
 * Client Entity
 */
@Entity({ name: 'clients' })
export class Client extends BaseEntity {
    /**
     * Column "name"
     */
    @Column({ type: 'varchar' })
    name: string;

    /**
     * Column "document"
     */
    @Column({ type: 'varchar' })
    document: string;

    /**
     * Column "birth_date"
     */
    @Column({ type: 'date' })
    birthDate: string;
}
