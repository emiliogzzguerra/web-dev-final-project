import React from "react";
import { Button } from "antd";

const AreaView = props => {
  const goBack = () => {
    props.history.goBack();
  };

  return (
    <div>
      <h2>Area View</h2>
      <p>Currently in Area #{props.match.params.id}</p>
      <Button onClick={() => goBack()}>Go back</Button>
    </div>
  );
};

export default AreaView;
