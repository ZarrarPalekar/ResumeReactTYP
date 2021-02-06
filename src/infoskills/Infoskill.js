import React from "react";
import "./Infoskill.css";
import { SkillBars } from "react-skills";

const skillsData = [
  {
    name: "ReactJS",
    level: 100,
    color: "blue",
  },
  {
    name: "NodeJS",
    level: 85,
    color: "red",
  },
];

const colors = {
  bar: "#fffaaa",
  title: {
    text: {
      hue: {
        minimum: 30,
        maximum: 150,
      },
      saturation: 50,
      level: {
        minimum: 30,
        maximum: 90,
      },
    },
    background: {
      hue: 20,
      saturation: 50,
      level: 30,
    },
  },
};

const Infoskill = () => {
  return (
    <div id="infoskills">
      <div class="firstsection">
        <p>Personal Information</p>
        <h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
          accusantium rem vero quam. Amet suscipit ipsum, assumenda praesentium
          dicta earum alias consequatur voluptatum illum numquam enim et, iure
          fugiat modi.
        </h3>
      </div>
      <div class="secondsection">
        <p>Skills</p>
        <div className="skills">
          <SkillBars skills={skillsData} />
        </div>
      </div>
    </div>
  );
};

export default Infoskill;
