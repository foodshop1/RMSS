import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCWKwTerxofHPVKBs2YkDGUUrbvetsFxiU',
  authDomain: 'ratemystudyspots.firebaseapp.com',
  projectId: 'ratemystudyspots',
  storageBucket: 'ratemystudyspots.firebasestorage.app',
  messagingSenderId: '578783479737',
  appId: '1:578783479737:web:b843558aad991f441ed868',
  measurementId: 'G-01PT971HH6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
