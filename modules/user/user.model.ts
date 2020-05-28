import { Model, DATA_TYPES } from 'https://deno.land/x/denodb/mod.ts';

export class UserModel extends Model {
  static table = 'user';

  static timestamps = true;

  static fields = {
    id: {
      primaryKey: true,
      autoIncrement: true,
    },
    username: DATA_TYPES.STRING,
    firstname: DATA_TYPES.STRING,
    lastname: DATA_TYPES.STRING,
    email: DATA_TYPES.STRING,
    password: DATA_TYPES.TEXT,
  };

}