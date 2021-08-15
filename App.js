import React, { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "😊": "Smiling",
  "😳": "Disbelief",
  "😞": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance"
};

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var input = event.target.value;
    var meaning = emojiDictionary[input];

    if (meaning === undefined) {
      meaning = "We dont have that in  the database";
    }

    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1> Inside Out </h1>
      <input
        onChange={emojiInputHandler}
        placeholder="Enter the emoji here"
      ></input>
      <div> Meaning : {meaning}</div>
    </div>
  );
}
