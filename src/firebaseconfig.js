import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDuX_qzeftNtFnLsUXX0vVAP7aBHuar8gg",
  authDomain: "chatzone-ae16c.firebaseapp.com",
  databaseURL: "https://chatzone-ae16c-default-rtdb.firebaseio.com",
  projectId: "chatzone-ae16c",
  storageBucket: "chatzone-ae16c.appspot.com",
  messagingSenderId: "279019176629",
  appId: "1:279019176629:web:d3cb80bfdceec162d9f4fc",
  measurementId: "G-L5H7ET8BV7"
};

const app = initializeApp(firebaseConfig);


export default firebaseConfig