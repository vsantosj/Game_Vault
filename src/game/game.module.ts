import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";
import { CategoryModule } from '../category/category.module';
import { GameService } from './services/game.service';
import { GameController } from './controllers/game.controller';
import { Game } from './entities/game.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Game]), CategoryModule],
        providers: [GameService],
        controllers: [GameController],
        exports: [TypeOrmModule],
})
export class GameModule{}
