import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CategoryService } from '../../category/services/category.service';
import { Game } from '../entities/game.entity';


@Injectable()
export class GameService{
    constructor(
        @InjectRepository(Game)
        private gameRepository: Repository<Game>,
        private categoryService: CategoryService,
    ){}

    
}
