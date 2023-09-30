import React from "react";
import { BigHead } from "@bigheads/core";
import useWithinWindowWidth from "./hooks/useWithinWindowWidth";
import useWindowSize from "./hooks/useWindowSize";
import "./Avatars.css";

// eslint-disable-next-line no-unused-vars
const Mithi = {
  body: "breasts",
  eyebrows: "serious",
  eyes: "content",
  facialHair: "none",
  hair: "bun",
  hairColor: "black",
  lipColor: "purple",
  mouth: "grin",
  skinTone: "yellow",
};

// eslint-disable-next-line no-unused-vars
const Diana = {
  body: "chest",
  eyebrows: "concerned",
  eyes: "content",
  facialHair: "none3",
  hair: "pixie",
  hairColor: "blonde",
  lipColor: "green",
  mouth: "open",
  skinTone: "light",
};

// eslint-disable-next-line no-unused-vars
const Mikong = {
  body: "breasts",
  eyebrows: "angry",
  eyes: "dizzy",
  facialHair: "none2",
  hair: "bun",
  hairColor: "pink",
  lipColor: "pink",
  mouth: "tongue",
  skinTone: "yellow",
};

function Avatars() {
  const isBigScreen = useWithinWindowWidth(1001, Infinity);
  const isMediumScreen = useWithinWindowWidth(701, 1000);

  const windowSize = useWindowSize();

  const renderAvatar = (name, avatarProps) => {
    return (
      <div key={name} className="avatar-container">
        <h2>{name}</h2>
        <div className="avatar-image">
          <BigHead {...avatarProps} />
        </div>
      </div>
    );
  };

  return (
    <div>
      <p>Width: {windowSize.width}px</p>
      <p>Height: {windowSize.height}px</p>

      {isBigScreen && renderAvatar("Mithi", Mithi)}
      {isMediumScreen && renderAvatar("Diana", Diana)}
      {!isBigScreen && !isMediumScreen && renderAvatar("Mikong", Mikong)}
    </div>
  );
}

export default Avatars;
