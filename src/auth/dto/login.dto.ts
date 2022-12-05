import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsPositive, IsString } from 'class-validator';

/**
 * DTO for creating "Account"
 */
export class LoginDto {
    /**
     * Column "createDate"
     */
    @ApiProperty({
        description: 'name',
        example: 'john',
    })
    @IsString()
    name: string;
}
