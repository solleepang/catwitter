import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYIV0-bdQKLfWmDp7vsWm29UrDplGW0tQ",
  authDomain: "catwitter.firebaseapp.com",
  projectId: "catwitter",
  storageBucket: "catwitter.appspot.com",
  messagingSenderId: "715791164083",
  appId: "1:715791164083:web:726f29710d41cc864286c6",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
