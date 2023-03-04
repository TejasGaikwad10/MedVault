import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Delete from "./pages/user/delete";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { app, database, storage } from "./firebaseConfig.js";
import {
  setDoc,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import Navbar from "./pages/user/navbar";
import ReadContent from "./pages/user/readcontent";
import WriteContent from "./pages/user/writecontent";
import { useAuth0 } from "@auth0/auth0-react";
import LoggedInUser from "./pages/user/loggedIn";
import AdminDash from "./pages/admin/dashboard-admin";
import { Link } from "react-router-dom";
import Admin from "./pages/admin/admin";
async function getdoc(docRef) {
  const docSnap = await getDoc(docRef);
  return docSnap;
}
async function setdoc(id) {
  await setDoc(doc(database, "users", id), {
    // id=
  });
}
function App() {
  const [uid, setuid] = useState("");
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const [docref, setdocref] = useState();
  // const [id,setid]=useState('');
  var id = "";
  if (isAuthenticated) {
    id = user?.sub?.substring(14);
    //  console
  }

  return (
    <div>
      {/* {  isAuthenticated? */}
      
      <Routes>
        <Route path="/*" element={isAuthenticated?<LoggedInUser id={id} /> :<button onClick={() => loginWithRedirect()}>Log In</button>} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
      {/* : */}
      {/* <div>
 <button onClick={() => loginWithRedirect()}>Log In</button>
            <Link to='/admin'>
            admin
            </Link> */}
      {/* </div> */}
    </div>
    // <AdminDash/>
  );
}

export default App;
