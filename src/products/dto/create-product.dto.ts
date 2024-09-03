import { IsNotEmpty, IsString, IsNumber, Min, } from 'class-validator';

//DTO's are used to validate data while transfering data accross application
export class CreateProduct{

    @IsString()
    @IsNotEmpty()
    name:string;

    @IsString()
    description:string;

    @IsNotEmpty()
    @IsNumber()
    price:number;

    @IsString()
    category:string;

}