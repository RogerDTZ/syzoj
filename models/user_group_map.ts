import * as TypeORM from "typeorm";
import Model from "./common";

@TypeORM.Entity()
export default class UserGroupMap extends Model {

  @TypeORM.Index()
  @TypeORM.PrimaryColumn({ type: "integer" })
  usergroup_id: number;

  @TypeORM.Index()
  @TypeORM.PrimaryColumn({ type: "integer" })
  user_id: number;

}
