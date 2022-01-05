import React from "react";
import * as dat from "dat.gui";
import "./Playground.css";

interface IPlaygroundProps {
  demoFn: (gui: dat.GUI, playgroundId: string) => void;
}

function uuid() {
  const random = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "x",
    "y",
    "z",
  ];
  let uuid = "";

  for (let i = 0; i < 10; i++) {
    uuid += random[Math.floor(Math.random() * random.length)];
  }
  return uuid;
}

export const Playground: React.FC<IPlaygroundProps> = ({ demoFn }) => {
  const playgroundController = React.useRef<HTMLDivElement>();
  const [divId, setUuid] = React.useState("");
  React.useEffect(() => {
    const gui = new dat.GUI({ autoPlace: false });
      playgroundController.current?.appendChild(gui.domElement);
      const uid = uuid()
    setUuid(uid);
    setTimeout(() => demoFn(gui, `#${uid}`));
  }, []);

  return (
    <div className="playground">
      <div className="playground-content">
        <div id={divId}></div>
      </div>
      <div className="playground-controller" ref={playgroundController}></div>
    </div>
  );
};
