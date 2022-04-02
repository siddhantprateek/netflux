import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import config from './config.json'
const firebaseConfig = {
  apiKey: config.apiKey ,
  authDomain: config.authDomain,
  databaseURL: config.databaseURL,
  projectId: config.projectId, 
  storageBucket: config.storageBucket ,
  messagingSenderId: config.messagingSenderId ,
  appId: config.appId,
  measurementId: config.measurementId
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)