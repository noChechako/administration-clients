import { ApiProperty } from '@nestjs/swagger';
import {IsBoolean, IsNumber, IsPositive, IsString} from 'class-validator';

export class AccountCreateDto {
    /**
     * Column "personId"
     */
    @ApiProperty({
        description: 'personId',
        example: '759ce177-ada1-4c78-a41e-6bea2eb5709b',
    })
    @IsString()
    personId: string;

    /**
     * Column "balance"
     */
    @ApiProperty({
        description: 'balance',
        example: 1.3,
    })
    @IsNumber()
    @IsPositive()
    balance: number;

    /**
     * Column "dailyWithdrawalLimit"
     */
    @ApiProperty({
        description: 'dailyWithdrawalLimit',
        example: 100,
    })
    @IsNumber()
    @IsPositive()
    dailyWithdrawalLimit: number;

    /**
     * Column "active"
     */
    @ApiProperty({
        description: 'active',
        example: 100,
    })
    @IsBoolean()
    active: boolean;

    /**
     * Column "accountType"
     */
    @ApiProperty({
        description: 'accountType',
        example: 1,
    })
    @IsNumber()
    @IsPositive()
    accountType: number;

    /**
     * Column "personId"
     */
    @ApiProperty({
        description: 'date',
        example: '2020-10-11',
    })
    @IsString()
    date: string;
}
