const DATABASE_NAME = process.env.DATABASE_NAME || "skoolar";
const COLLECTION_USER = "skoolar";
export const getDb = async () => {
  const client = await getMongoClientInstance();
  const db = client.db(DATABASE_NAME);

  return db;
};

export const getUser = async () => {
  const db = await getDb();

  const parent = await db
    .collection(COLLECTION_USER)
    .find()
    .project({ password: 0, createdAt: 0, updatedAt: 0 })
    .toArray();
  return parent;
};

export const createParent = async (parent) => {
  const modifiedUser = {
    ...parent,
    password: hashText(parent.password),
  };
  const db = await getDb();
  const result = await db.collection(COLLECTION_USER).insertOne(modifiedUser);

  return result;
};
export const getParentByEmail = async (email) => {
  const db = await getDb();
  const parent = await db.collection(COLLECTION_USER).findOne({ email: email });

  return parent;
};

export const getParentByName = async (name) => {
  const db = await getDb();
  const parent = await db.collection(COLLECTION_USER).findOne({ name: name });

  return parent;
};