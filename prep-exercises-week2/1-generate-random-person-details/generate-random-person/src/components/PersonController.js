import React, { useState, useEffect } from "react";
import Person from "./Person";

const PersonController = () => {
  const [person, setPerson] = useState(null);
  const getPerson = async () => {
    try {
      const response = await fetch("https://www.randomuser.me/api?results=1");
      const data = await response.json();
      const { name, email } = data.results[0];
      setPerson({ name, email });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPerson();
  }, []);
  return (
    <div className="App">
      <Person person={person} />
      <button onClick={getPerson}>Get Random Person</button>
    </div>
  );
};

export default PersonController;
