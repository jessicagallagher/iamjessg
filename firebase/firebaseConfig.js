import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAIki4Nt--2ngT3nbas4vJGPjmyJcAfbNA',
  authDomain: 'techmeowt-blog.firebaseapp.com',
  projectId: 'techmeowt-blog',
  storageBucket: 'techmeowt-blog.appspot.com',
  messagingSenderId: '658773706440',
  appId: '1:658773706440:web:6cbdfee3cc92d77eb387fd',
};

let firebaseApp;

if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
}

export const app = firebaseApp;
export const database = getFirestore(app);
