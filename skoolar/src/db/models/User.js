import { hashingPassword } from "../utils/bcrypt";
import { getMongoClientInstance } from "../../config/mongo";
const DATABASE_NAME = process.env.DATABASE_NAME || "skoolar";
const COLLECTION_USER = "user";
export const getDb = async () => {
  const client = await getMongoClientInstance();
  const db = client.db(DATABASE_NAME);

  return db;
};

export const getUser = async () => {

  const db = await getDb();

  const user = await db
    .collection(COLLECTION_USER)
    .find()
    .project({ password: 0, createdAt: 0, updatedAt: 0 })
    .toArray();


  return user;
};

// USER MODELS COLLECTION
export const getUserByNIK = async (NIK) => {
  // console.log(NIK);
  const db = await getDb();
  const user = await db.collection(COLLECTION_USER).findOne({ NIK: NIK });
  return user;
};

export const deleteUserById = async (id) => {
  const db = await getDb();
  await db.collection(COLLECTION_USER).insertOne({
    _id: new ObjectId(id),
  });
  return "create data successfully";
};

export const createUser = async (user) => {
  console.log(user, " <<<di model create user nich <<<");
  const modifiedUser = {
    ...user,
    role: "teacher",
    password: hashingPassword(user.password),
  };


  const db = await getDb();
  const result = await db.collection(COLLECTION_USER).insertOne(modifiedUser);

  return result;
};
export const getUserByEmail = async (email) => {
  const db = await getDb();
  const user = await db.collection(COLLECTION_USER).findOne({ email: email });

  return user;
};

export const getUserByUsername = async (name) => {
  const db = await getDb();
  const user = await db.collection(COLLECTION_USER).findOne({ name: name });

  return user;
};
