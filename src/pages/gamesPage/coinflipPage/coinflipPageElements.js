import styled from "styled-components";
import headsImg from "../../../assets/CoinflipCard/H.jpg";

export const GamesPageContainer = styled.div`
  background: #1f2029;
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-wrap: wrap;
`;

export const CoinflipCreate = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  min-height: 70px;
  width: 100vw;
  border-bottom: 2px solid #a3a3a3;
  border-top: 2px solid #a3a3a3;
`;

export const GameName = styled.div`
  color: white;
  margin-left: 20px;
  font-size: 1.2rem;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
`;

export const Side = styled.div`
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  color: white;
  box-shadow: 3px 3px 3px black;
  background-image: url(${headsImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const SideChoice = styled.div`
  color: white;
  padding: 5px 10px 5px 10px;
  background: #1f2029;
  border-radius: 10px;
  display: flex;
  gap: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BetAmount = styled.input`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-radius: 10px;
  border-color: white;
  background: #1f2029;
  color: white;
`;

export const CreateGameButton = styled.button`
  margin-right: 20px;
  background: #6734eb;
  display: flex;
  align-items: center;
  justify-content: center;
  text-wrap: wrap;
  height: 40px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  padding: 10px;
`;

export const GamesContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1em;
`;
