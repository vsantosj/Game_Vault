import { Category } from './../entities/category.entity';
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";


@Injectable()

export class CategoryService {
    constructor(

        @InjectRepository(Category)
        private categoryRepository: Repository<Category>,
    ) { }


    async findAll(): Promise<Category[]> {
        return await this.categoryRepository.find();
    }

    async findById(id: number): Promise<Category>{
        const category = await this.categoryRepository.findOne({
            where:{
                id
            }
        });
        if(!category)
            throw new HttpException(`Categoria com id ${id} não encontrada!`, HttpStatus.NOT_FOUND);

        return category;
    }

    async create(category: Category): Promise<Category>{
        return await this.categoryRepository.save(category);
    }


}
