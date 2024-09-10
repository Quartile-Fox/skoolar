"use server";
import { cookies } from "next/headers";
import { db } from "../../../../config/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  addDoc,
  Timestamp,
  doc,
  updateDoc,
} from "firebase/firestore";

export const getAssignment = async () => {
  const assignmentRef = collection(db, "assignment");
  getDocs(assignmentRef)
    .then((snapshot) => {
      console.log(snapshot.docs);

      let books = [];
      snapshot.docs.forEach((doc) => {
        books.push({ ...doc.data(), id: doc.id });
      });
      console.log(books, "ini books");
    })
    .catch((err) => {
      console.log(err.message);
    });
};
