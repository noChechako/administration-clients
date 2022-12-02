import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive } from 'class-validator';

export class BalanceRefillUpdateDto {
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
}
