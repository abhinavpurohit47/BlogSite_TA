import {MongoClient} from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.DB_NAME;

//for checking the MongoDB uri::
if(!MONGODB_URI){
    throw new Error('Define the MONGODB_URI enviornmental variable');
}

//for checking the MongoDB DB::
if(!MONGODB_DB) {
    throw new Error('Define the MONGODB_DB enviornmental variable');
}

let cachedClient = null;
let cachedDB = null;

export async function connectToDatabase() {
    // check the cached.
    if (cachedClient && cachedDb) {
        // load from cache
        return {
            client: cachedClient,
            db: cachedDb,
        };
    }

    // set the connection options
    const opts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    // Connect to cluster
    let client = new MongoClient(MONGODB_URI, opts);
    await client.connect();
    let db = client.db(MONGODB_DB);

    // set cache
    cachedClient = client;
    cachedDb = db;

    return {
        client: cachedClient,
        db: cachedDb,
    };
}