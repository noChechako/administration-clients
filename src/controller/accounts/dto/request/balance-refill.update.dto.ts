import {ApiProperty} from '@nestjs/swagger';
import {IsNumber, IsPositive} from 'class-validator';

export class BalanceRefillUpdateDto {
    /**
     * Column "value"
     */
    @ApiProperty({
        description: 'value',
        example: 1.3,
    })
    @IsNumber()
    @IsPositive()
    value: number;
}
