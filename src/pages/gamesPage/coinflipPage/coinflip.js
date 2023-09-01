import React, { useState, useEffect } from "react";
import { useFirebase } from "../../../firebaseContext";
import CoinflipCard from "../../../components/CoinflipCard";
import {
  GamesPageContainer,
  CoinflipCreate,
  SideChoice,
  BetAmount,
  CreateGameButton,
  GameName,
  DetailsContainer,
  GamesContainer,
} from "./coinflipPageElements";
import GameNavbar from "../../../components/GameNavbar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const Coinflip = () => {
  const [bets, setBets] = useState([]);
  const [betAmount, setBetAmount] = useState("");
  const [choice, setChoice] = useState("H");
  const [hasJoined, setHasJoined] = useState(false);
  const [joinedChoice, setJoinedChoice] = useState("");

  const { user } = useFirebase();

  const handleCreateBet = async () => {
    if (user && betAmount && choice) {
      const newBet = { betAmount, choice };
      setBets([...bets, newBet]);
      setBetAmount("");

      try {
        const betsCollection = firebase.firestore().collection("coinflips"); // Use your Firestore collection name
        await betsCollection.add({
          creator: user.uid, // Store the UID of the user who created the bet
          betAmount,
          choice,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(), // Store the timestamp of when the bet was created
          joinedUsers: [], // Initially, no users have joined
          winner: null, // Initially, there's no winner
        });
        setBetAmount("");
        setChoice("H");

        toast.success("Coinflip successfully created.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } catch (error) {
        console.error("Error storing the bet in Firestore:", error);
      }
    } else {
      toast.error("Please sign in to create a Coinflip.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.log("User is not signed in.");
    }
  };

  useEffect(() => {
    // Fetch Coinflips from Firestore
    const fetchCoinflips = async () => {
      try {
        const betsCollection = firebase.firestore().collection("coinflips");
        const snapshot = await betsCollection.get();
        const coinflips = snapshot.docs.map((doc) => doc.data());
        // Update your local state with the fetched data
        setBets(coinflips);
      } catch (error) {
        console.error("Error fetching Coinflips from Firestore:", error);
      }
    };

    fetchCoinflips();
  }, []);

  return (
    <>
      <GameNavbar />
      <GamesPageContainer>
        <CoinflipCreate>
          <GameName>Coinflip</GameName>
          <DetailsContainer>
            <SideChoice>
              Side:
              <select
                value={choice}
                onChange={(e) => setChoice(e.target.value)}
              >
                <option value="H">H</option>
                <option value="T">T</option>
              </select>
            </SideChoice>
            <BetAmount
              type="number"
              placeholder="Enter bet amount"
              value={betAmount}
              onChange={(e) => setBetAmount(e.target.value)}
            />
            <CreateGameButton onClick={handleCreateBet}>
              Create Coinflip
            </CreateGameButton>
          </DetailsContainer>
        </CoinflipCreate>
        <GamesContainer>
          {bets.map((bet, index) => (
            <CoinflipCard key={index} bet={bet} />
          ))}
        </GamesContainer>
      </GamesPageContainer>
    </>
  );
};

export default Coinflip;
