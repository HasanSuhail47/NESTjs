import { Body, Controller, Get, Param, Post, Query, Put, Delete, ParseIntPipe } from '@nestjs/common';
import {CreateProduct} from './dto/create-product.dto'
import{updateproduct} from './dto/update-product.dto'
import{ProductsService} from './products.service'
//Controller class where 'products' is the prefix for all the routes
@Controller('products')
export class ProductsController {
    constructor(private readonly productservice:ProductsService){}
    //API's routes

    //@Body() can be used to access the body object of the request and @Query can be used to access the query param


    //Get request to get all the products
    @Get()
    getproducts(){
        return this.productservice.getallproduct();
    }

    //Searching for a string given as a query param
    @Get('search')
    searchProducts(@Query('search') search: string) {
        console.log("here")
        return this.productservice.searchProducts(search);
    }

    //Get request to get one the product using its unique id @Param() can be used to get the id
    @Get(':id')
    getproduct(@Param('id') id:number){
        return this.productservice.getoneproduct(Number(id));
    }

    //Creating a new product
    @Post()
    createproduct(@Body() createProduct:CreateProduct){
        return this.productservice.createproduct(createProduct);
    }

    //Update a product with id
    @Put(':id')
    updateproduct(@Param('id') id:number ,@Body() updateproduct:updateproduct)
    {
        return this.productservice.updateproduct(id,updateproduct);
    }

    @Delete(':id')
    deleteproduct(@Param('id') id:string){
        return this.productservice.deleteproduct(Number(id))
    }
}