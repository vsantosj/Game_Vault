
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "../../category/entities/category.entity";

@Entity({ name: "tb_game" })
export class Game {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    title: string;

    @Column()
    description: string;

    @Column("decimal", { precision: 10, scale: 2, nullable: false })
    price: number;

    @Column({type: 'boolean', nullable: false, default: false })
    isInStock: boolean;


    @ManyToOne(() => Category, (category) => category.game,{
        onDelete: "CASCADE"
    })

    @JoinColumn({name: 'category_id'})
    category: Category;

}
