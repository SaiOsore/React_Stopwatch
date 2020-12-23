import React from "react";
import Stopwatch from "../../components/stopwatch/Stopwatch";
import { 
  HomeStyled,
} from "./HomeStyled";

const Home = () => {

  return (
    <HomeStyled>
      <Stopwatch />
    </HomeStyled>
  );
}

export default Home;