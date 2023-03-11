/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
export class SignUpUserDto {
    @ApiProperty()
    name: string;
    @ApiProperty()

    email: string;
    @ApiProperty()
    latitude: Float64Array;
    @ApiProperty()
    longitude: Float64Array;
}
