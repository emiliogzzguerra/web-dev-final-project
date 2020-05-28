import React from "react";
import { Button } from "antd";
import { getPathWithParam } from "../../utils";
import routes from "../../routes";

const UsersView = props => {
  const goToUser = () => {
    props.history.push(getPathWithParam(routes.user, '1234'));
  };
  return (
    <div>
      <h2>Users View</h2>
      <Button onClick={goToUser}>Go to user 1234</Button>
    </div>
  );
};

export default UsersView;
