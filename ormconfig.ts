import {SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions";

const config: SqliteConnectionOptions  = {
    type: 'sqlite',
    database: 'data',
    entities: ['dist/src/**/*.entity.js'],
    synchronize: true
    // migrations: [
    //     'dist/src/data/migrations/*.js'
    // ],
    // cli: {
    //     migrationsDir: 'src/data/migrations'
    // }

}

export default config;