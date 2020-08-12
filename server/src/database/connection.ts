import knex from 'knex';

import databaseConfig from '../config/database';

class Connection {
    db!: knex;

    constructor() {
        this.init();
    }

    private init() {
        this.db = knex(databaseConfig);
    }
}

export default new Connection().db;
