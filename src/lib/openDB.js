import { MongoClient } from 'mongodb';

export async function openDB() {
  const client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  if (!client.isConnected()) await client.connect();

  return client.db('agenda');
}