import * as TypeORM from "typeorm";
import Model from "./common";

@TypeORM.Entity()
export default class UserGroup extends Model {
  static cache = true;

  @TypeORM.PrimaryGeneratedColumn()
  id: number;

  @TypeORM.Column({ nullable: true, type: "varchar", length: 255 })
  name: string;

  @TypeORM.Column({ nullable: true, type: "varchar", length: 255 })
  color: string;

}
