import { Config } from 'knex';
import path from 'path';

const databaseConfig: Config = {
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, '..', 'database', 'database.sqlite'),
    },
    useNullAsDefault: true,
};

export default databaseConfig;
