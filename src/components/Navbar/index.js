import React, { useState, useEffect } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { auth, firestore } from "../../firebase";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [userScore, setUserScore] = useState(null);

  useEffect(() => {
    //console.log("Inside useEffect");
    const unsubscribe = auth().onAuthStateChanged(async (user) => {
      if (user) {
        console.log("User signed in:", user.uid);

        setUser(user);
        const userRef = firestore().collection("users").doc(user.uid);
        const userDoc = await userRef.get();
        console.log(
          "User document:",
          userDoc.exists ? userDoc.data() : "Not found"
        );

        if (!userDoc.exists) {
          console.log("Creating new user document");
          await userRef.set({
            score: 0,
          });
          setUserScore(0);
        } else {
          console.log("Fetching user score:", userDoc.data().score);
          setUserScore(userDoc.data().score);
        }
      } else {
        console.log("User signed out");
        setUser(null);
        setUserScore(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await auth().signOut();
      // Successful sign out
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleSignIn = async () => {
    try {
      const provider = new auth.GoogleAuthProvider();
      await auth().signInWithPopup(provider);
      console.log("Successful login");
      // Successful login
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/coinflip" $activeStyle>
            Games
          </NavLink>
          <NavLink to="/earn" $activeStyle>
            Earn
          </NavLink>
          <NavLink to="/rewards" $activeStyle>
            Rewards
          </NavLink>
        </NavMenu>
        <NavBtn>
          {user ? (
            <>
              <div style={{ color: "white" }}>
                {userScore !== null
                  ? `Score: ${userScore}`
                  : "Score: Loading..."}
              </div>
              <NavBtnLink onClick={handleSignOut}>Log Out</NavBtnLink>
            </>
          ) : (
            <NavBtnLink onClick={handleSignIn}>Sign In</NavBtnLink>
          )}
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
