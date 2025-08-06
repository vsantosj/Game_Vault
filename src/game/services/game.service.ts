import { HttpException, HttpStatus, Injectable, NotImplementedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { CategoryService } from '../../category/services/category.service';
import { Game } from '../entities/game.entity';


@Injectable()
export class GameService{
    constructor(
        @InjectRepository(Game)
        private gameRepository: Repository<Game>,
        private categoryService: CategoryService,
    ){}
    
    async findAll(): Promise<Game[]>{
        return await this.gameRepository.find({
            relations:{
                category: true
            }
        });
    }

    async findById(id: number): Promise<Game> {
        const game = await this.gameRepository.findOne({
            where:{id},
            relations:{
                category: true
            }
        });
        if(!game)
            throw new HttpException (`Game com  ID: ${id} não encontrado!`, HttpStatus.NOT_FOUND)

        return game;
    }

        async getGameByCategory(id: number): Promise<Game[]>{
            await this.categoryService.findById(id);

            const games = await this.gameRepository.find({
                where: {category: {id}},
                relations:{
                    category: true
                }
            });
            if(games.length === 0) 
                throw new NotImplementedException(`Nenhum game encontrado para a categoria com ID ${id}`)
              return games;
    }


    async create(game: Game): Promise<Game>{
        await this.categoryService.findById(game.category.id);
        return await this.gameRepository.save(game);
    }

    async update(game: Game): Promise<Game>{

        await this.findById(game.id);

        await this.categoryService.findById(game.category.id);

        return await this.gameRepository.save(game);
    }


    async delete(id: number): Promise<DeleteResult>{
        await this.findById(id);
        return await this.gameRepository.delete(id);
    }
}
