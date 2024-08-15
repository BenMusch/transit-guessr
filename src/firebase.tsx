import { initializeApp } from "firebase/app";
import { addDoc, getFirestore, collection } from "firebase/firestore/lite";
import type { FirebaseApp } from "firebase/app";

let firebaseApp: FirebaseApp | undefined;

export enum FirebaseCollection {
  GUESSES = "guesses",
  SCORES = "scores",
}

export function tryToSaveFirebaseDoc(
  collectionName: FirebaseCollection,
  doc: unknown,
) {
  try {
    if (!firebaseApp && window.firebaseConfig) {
      firebaseApp = initializeApp(window.firebaseConfig);
    }

    if (!firebaseApp) {
      return;
    }

    const dbRef = getFirestore(firebaseApp);
    const collectionRef = collection(dbRef, collectionName);
    addDoc(collectionRef, doc);
  } catch (err) {
    console.error("Error sending guess data to server", err);
  }
}
