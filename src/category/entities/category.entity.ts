import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Game } from "../../game/entities/game.entity";

@Entity({name: "tb_category"})
export class Category{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100, nullable: false})
    name: string;

    @Column({length: 250, nullable: false})
    description: string;

    @Column({type: 'boolean', nullable: false, default: false })
    isActive:boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date ;

    @OneToMany(() => Game, (game) => game.category)
    game: Game[];
    
}
