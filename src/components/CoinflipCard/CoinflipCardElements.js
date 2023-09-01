import styled from "styled-components";
import profileImg from "../../assets/CoinflipCard/profilephoto.jpg";
import headsImg from "../../assets/CoinflipCard/H.jpg";
import tailsImg from "../../assets/CoinflipCard/T.png";

export const ParentContainer = styled.div`
  position: relative; /* Ensure proper positioning for the Countdown */
`;

export const CoinflipCardContainer = styled.div`
  background: #4b4c5e;
  min-height: 200px;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw -1000px) / 2);
  position: relative;
  filter: ${({ isBlurred }) => (isBlurred ? "blur(5px)" : "none")};
  transition: filter 0.05s ease-in-out;
`;

export const Card = styled.div`
  margin: 20px;
  background: #333541;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  padding: 20px;
  gap: 10px;
  justify-content: space-between;
`;

export const Side = styled.div`
  display: flex;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  color: white;
  box-shadow: 3px 3px 3px black;
  ${({ bet }) =>
    bet.choice === "H"
      ? `background-image: url(${headsImg});`
      : `background-image: url(${tailsImg});`}
  /* background-image: url(${headsImg}); */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Icon = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  -moz-border-radius: 50px;
  -webkit-border-radius: 50px;
  color: white;
  box-shadow: 3px 3px 3px black;
  background-image: url(${profileImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &:hover {
    transform: scale(1.07);
    transition: ease-out;
  }
`;

export const Name = styled.div`
  color: white;
`;

export const Amount = styled.div`
  text-align: center;
  color: white;
  background: #24252f;
  padding: 10px;
  border-radius: 10px;
`;

export const Versus = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
`;

export const JoinButton = styled.button`
  margin-top: 60px;
  background: #6734eb;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
`;

export const Countdown = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  color: white;
  font-weight: bold;
  z-index: 2;
  background: #1f2029;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  align-items: center;
  justify-content: center;
`;
