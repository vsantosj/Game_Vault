import { DeleteResult, UpdateDateColumn } from 'typeorm';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { GameService } from "../services/game.service";
import { Game } from "../entities/game.entity";


@Controller('/games')
export class GameController {

    constructor(private readonly gameService: GameService) { }


    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Game[]> {
        return this.gameService.findAll();
    }

    @Get('/:id')
    findById(@Param('id', ParseIntPipe) id: number): Promise<Game> {
        return this.gameService.findById(id);
    }

    @Get('/categoria/:id')
    getGameByCategory(@Param('id', ParseIntPipe) id: number): Promise<Game[]> {
        return this.gameService.getGameByCategory(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() game: Game): Promise<Game> {
        return this.gameService.create(game)
    }

    @Put('/:id')
    @HttpCode(HttpStatus.OK)
    update(@Param('id',ParseIntPipe)id: number, @Body()game:Game): Promise<Game>{
        return this.gameService.update(game);
    }


    @Delete('/:id')
    delete(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
        return this.gameService.delete(id);
    }
}
