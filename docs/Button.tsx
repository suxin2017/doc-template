import React from "react";
import { select } from "d3";
import { Playground } from "./components/Playground";

import { test } from "./func";

interface IButtonProps {}

export const Button: React.FC<IButtonProps> = (props) => {
  return <Playground demoFn={test} />;
};
