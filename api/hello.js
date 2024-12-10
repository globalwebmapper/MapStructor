const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI; // MongoDB connection string from Vercel's environment variables

export default async function handler(req, res) {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db('mapstructor_database'); // Replace with your database name
        const collection = db.collection('testcollection'); // Replace with your collection name

        // Fetch the first document in the collection
        const document = await collection.findOne({});
        
        res.status(200).json({
            message: "Hello World!",
            mongoMessage: document?.message || "No data found in MongoDB",
        });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        res.status(500).json({ error: "Unable to connect to MongoDB" });
    } finally {
        await client.close();
    }
}