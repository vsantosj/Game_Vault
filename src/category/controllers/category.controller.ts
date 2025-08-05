import { Category } from '../entities/category.entity';
import { CategoryService } from './../services/category.service';
import { Body, Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post } from "@nestjs/common";


@Controller('/categorias')
export class CategoryController {

    constructor(private readonly categoryService: CategoryService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Category[]> {
        return this.categoryService.getAllCategories();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Category>{
        return this.categoryService.getCategoryById(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() category: Category): Promise<Category> {
        return this.categoryService.createCategory(category);
    }
}
