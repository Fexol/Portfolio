import React, { useState, useEffect } from "react";
import {
  ParentContainer,
  CoinflipCardContainer,
  Card,
  Side,
  Icon,
  Name,
  Amount,
  Versus,
  JoinButton,
  Countdown,
  Winner,
} from "./CoinflipCardElements";
import firebase from "firebase/app";

const CoinflipCard = ({ bet, gameId, user, winner }) => {
  const [isBlurred, setIsBlurred] = useState(false);
  const [showCountdown, setShowCountdown] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [hasJoined, setHasJoined] = useState(false);

  const handleJoinButtonClick = async () => {
    if (!hasJoined && user) {
      const gameRef = firebase.firestore().doc(`coinflips/${gameId}`);

      try {
        await gameRef.update({
          joinedUsers: firebase.firestore.FieldValue.arrayUnion({
            uid: user.uid,
            choice: bet.choice,
          }),
        });

        setHasJoined(true);
        setShowCountdown(true);
        startCountdown();
      } catch (error) {
        console.error("Error joining the game:", error);
      }
    }
    setIsBlurred(true);
    setTimeout(() => {
      setShowCountdown(true);
      startCountdown();
    }, 500);
  };

  const startCountdown = () => {
    setShowCountdown(true);

    let countdownValue = 3;

    const countdownInterval = setInterval(() => {
      setCountdown(countdownValue);
      countdownValue -= 1;

      if (countdownValue < 0) {
        clearInterval(countdownInterval);
        setShowCountdown(false);
        setCountdown(3); // Reset countdown value for next use
      }
    }, 1000);
  };

  useEffect(() => {
    const gameRef = firebase.firestore().doc(`coinflips/${gameId}`);
    const unsubscribe = gameRef.onSnapshot((snapshot) => {
      const data = snapshot.data();
      if (data && data.winner) {
        // Display the winner
        setShowCountdown(false);
        setCountdown(3);
      }
    });

    return () => unsubscribe(); // Clean up the listener when component unmounts
  }, [gameId]);

  return (
    <>
      <ParentContainer>
        <CoinflipCardContainer isBlurred={isBlurred}>
          <Card>
            <Icon>
              <Side bet={bet} />
            </Icon>
            <Name>Jens</Name>
            <Amount>{bet.betAmount}</Amount>
          </Card>
          <Versus>VS</Versus>
          <Card>
            <JoinButton onClick={handleJoinButtonClick}>Join Game</JoinButton>
            <Amount>{bet.betAmount}</Amount>
          </Card>
        </CoinflipCardContainer>
        {showCountdown && <Countdown>{countdown}</Countdown>}
        {winner && <Winner>Winner: {winner}</Winner>}
      </ParentContainer>
    </>
  );
};

export default CoinflipCard;
