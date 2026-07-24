declare module "better-sqlite3" {
  class Database {
    constructor(filename: string, options?: { fileMustExist?: boolean });
    pragma(statement: string): any;
    exec(statement: string): any;
    prepare(statement: string): any;
  }

  export default Database;
}
