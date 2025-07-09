import { reset, seed } from 'drizzle-seed';
import { db, sql } from './connection.ts';
import { schema } from './schema/index.ts';

//limpa o banco de dados
await reset(db, { schema });

await seed(db, schema).refine(f => {
    return {
        rooms: {
            count: 20,
            columns:{
                name: f.companyName(),
                description: f.loremIpsum(),
            }
        }
    }
});

await sql.end();