import React from "react";
import { GameNav, Bars, NavMenu, NavLink } from "./GameNavbarElements";

const GameNavbar = () => {
  return (
    <>
      <GameNav>
        <Bars />
        <NavMenu>
          <NavLink to="/coinflip" $activeStyle>
            Coinflip
          </NavLink>
          <NavLink to="/marble" $activeStyle>
            Marble
          </NavLink>
        </NavMenu>
      </GameNav>
    </>
  );
};

export default GameNavbar;
