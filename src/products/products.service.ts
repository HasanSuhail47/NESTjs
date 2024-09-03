import { Injectable } from '@nestjs/common';
import {Product} from './entities/product-entity'
import {CreateProduct} from './dto/create-product.dto'
import { updateproduct } from './dto/update-product.dto';

//This decorator is used so that this class can be injected to any part of the application like controllers
@Injectable()
export class ProductsService {

    //Using in-memory array of Product entities as a database
    private products : Product[] = []
    //product id
    private pid:number = 1

    //Specifying the return type will be an array Products
    getallproduct():Product[]{
        return this.products
    }

    getoneproduct(id:number){
        //using find() to get the product with specific id 
        console.log(typeof id)
        const product = this.products.find((p) => p.id===id)
        if(!product)
        {
            return({error:"No product found",product:product})
        }

        return product;
    }


    createproduct(createproduct:CreateProduct){
        //extracting data from createproduct object
        const {name,category,description,price} = createproduct

        //creating product entity using createproduct data
        const product:Product = {
            id:this.pid,
            name:name,
            category:category,
            description:description,
            price:price
        }
        this.pid=this.pid+1
        //Adding to the array
        this.products.push(product)
        return product;

    }

    //update using partial dto/updateproduct
    updateproduct(id:number, updateproduct:updateproduct){
        //getting the product using id
        const product = this.getoneproduct(Number(id))
        //updating the product with the coming updateproduct
        Object.assign(product, updateproduct)
        return product
    }

    deleteproduct(id:number){

        //filtering out the products that doesn't matche the id and rewriting the array
        this.products = this.products.filter((p)=> p.id !== id)
        return { message: 'Product deleted successfully' };
    }


    searchProducts(search: string): Product[] {
        //filtering out the products and returning which matches the search string
        return this.products.filter((p) => { 
            return (
                p.name.includes(search) ||
                p.description.includes(search) ||
                p.price == Number(search) ||
                p.category.includes(search)
            );
        });
    }
    
}
