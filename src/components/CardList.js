import React from "react";
import Card from "./Card";
import ErrorBoundry from "./ErrorBoundry";
// import { robots } from "./robots";

const CardList = ({ robots }) => {
  // if (true) throw new Error("oos");
  return (
    <div>
      {robots.map((robot, i) => {
        return <Card key={i} ids={robot} />;
      })}
    </div>
  );
};

export default CardList;
