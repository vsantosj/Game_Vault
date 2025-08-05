import { DeleteResult } from 'typeorm';
import { Category } from '../entities/category.entity';
import { CategoryService } from './../services/category.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";


@Controller('/categorias')
export class CategoryController {

    constructor(private readonly categoryService: CategoryService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Category[]> {
        return this.categoryService.findAll();
    }
    
        
    @Get('/ativas')
    findByAllActive(): Promise<Category[]>{
        return this.categoryService.findByAllActive();
    }
    
    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Category> {
        return this.categoryService.findById(id);
    }
    
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() category: Category): Promise<Category> {
        return this.categoryService.create(category);
    }
    
    @Put('/:id')
    @HttpCode(HttpStatus.OK)
    update(@Param('id', ParseIntPipe) id: number, @Body() category: Category): Promise<Category> {
        return this.categoryService.update(category);
    }
    
    @Delete('/:id')
    delete(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
        return this.categoryService.delete(id);
    }
    
    @Get('/nome/:name')
    findByName(@Param('name') name: string): Promise<Category[]> {
        return this.categoryService.findByName(name);
    }
    

}
