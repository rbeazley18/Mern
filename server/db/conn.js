const { MongoClient } = require("mongodb");

// var _db;

// module.exports = {
//     connectToServer: function (callback) {
//         client.connect(function (err, db) {
//             // Verify we got a good "db" object
//             if (db) {
//                 _db = db.db("employees");
//                 console.log("Successfully connected to MongoDB.");
//             }
//             return callback(err);
//         });
//     },

//     getDb: function () {
//         return _db;
//     },
// };

async function main() {
    const uri = process.env.ATLAS_URI;
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        await listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}



async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

main().catch(console.error);