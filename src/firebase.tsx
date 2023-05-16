import type { Station, Line } from "./data/stations";
import type { FirebaseOptions, FirebaseApp } from "firebase/app";
import { initializeApp } from "firebase/app";
import {
  addDoc,
  getDocs,
  getFirestore,
  collection,
  query,
  where,
} from "firebase/firestore/lite";

declare global {
  interface Window {
    firebaseConfig?: FirebaseOptions;
  }
}

// Super simple heuristic to stringify stations for firebase
export function firebaseNameForStation(station: Station): string {
  const stationNameSuffix = station.lines
    .map((line: Line) => `${line.name}${line.express ? "Exp" : ""}`)
    .join(",");

  return `${station.name} (${stationNameSuffix})`;
}

let firebaseApp: FirebaseApp | undefined;

export enum FirebaseCollection {
  GUESSES = "guesses",
  SCORES = "scores",
}

export function tryToSaveFirebaseDoc(
  collectionName: FirebaseCollection,
  doc: unknown
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

export function guessesForStation(station: Station) {
  const stationNameInFirebase = firebaseNameForStation(station);

  if (!firebaseApp && window.firebaseConfig) {
    firebaseApp = initializeApp(window.firebaseConfig);
  }

  if (!firebaseApp) {
    throw new Error("Error loading firebase");
  }

  const dbRef = getFirestore(firebaseApp);
  const collectionRef = collection(dbRef, FirebaseCollection.GUESSES);

  return getDocs(
    query(collectionRef, where("station", "==", stationNameInFirebase))
  );
}
