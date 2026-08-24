// Firebase SDK ve yapılandırma
const firebaseConfig = {
  apiKey: "AIzaSyBp0qvL9DzymRYNGcddUXeSrDDyWxSxal0",
  authDomain: "yks-kocum-d884b.firebaseapp.com",
  // EKLENEN SATIR: Avrupa bölgesi veritabanı adresi
  databaseURL: "https://yks-kocum-d884b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "yks-kocum-d884b",
  storageBucket: "yks-kocum-d884b.firebasestorage.app",
  messagingSenderId: "350673528928",
  appId: "1:350673528928:web:c7404d57a6d416e48bfb05",
  measurementId: "G-3329GY1DWV"
};

firebase.initializeApp(firebaseConfig);
const DB = firebase.database();

let currentStudentId = localStorage.getItem('activeStudentId') || "kagan"; 
const dbRef = (path) => DB.ref(`students/${currentStudentId}/${path}`);
