import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages";
import Earn from "./pages/earn";
import Rewards from "./pages/rewards";
import SignUp from "./pages/signup";
import Coinflip from "./pages/gamesPage/coinflipPage/coinflip";
import Marble from "./pages/gamesPage/marblePage/marble";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/coinflip" exact element={<Coinflip />} />
        <Route path="/marble" exact element={<Marble />} />
        <Route path="/" exact element={<Home />} />
        <Route path="/earn" exact element={<Earn />} />
        <Route path="/rewards" exact element={<Rewards />} />
        <Route path="/sign-up" exact element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
