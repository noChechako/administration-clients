import { ApiProperty } from '@nestjs/swagger';
import {IsEnum, IsNumber, IsPositive} from 'class-validator';
import {ChangeBalanceTypeEnum} from "../../../../utils/enums/change-balance-type.enum";

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

    @ApiProperty({
        description: 'type of changing balance',
        enum: ChangeBalanceTypeEnum,
    })
    @IsEnum(ChangeBalanceTypeEnum)
    type: ChangeBalanceTypeEnum;
}
