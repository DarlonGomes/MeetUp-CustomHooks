import React from "react";
import { Enviroment, Center } from "./style";
import Timer from "../../components/Timer";

function TimerPage() {
  return (
    <Center>
      <Enviroment />
      <Timer />
    </Center>
  );
}

export default TimerPage;
