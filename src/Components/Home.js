import React from "react";
import Addnote from "./Addnote";
import Notes from "./Notes";

function Home(props) {
  return (
    <>
      <Addnote sendAlert={props.sendAlert}/>

      <Notes sendAlert={props.sendAlert}/>
    </>
  );
}

export default Home;
