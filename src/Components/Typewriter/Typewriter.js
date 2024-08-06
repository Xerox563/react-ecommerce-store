import React, { useEffect, useState } from "react";
import styles from "./Typewriter.module.css"; // Assuming you create a separate CSS module for typewriter styles

const Typewriter = () => {
  const textArray = ["WELCOME"]; // Array of strings to type
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const typingDelay = 150; // Delay in typing

  useEffect(() => {
    const intervalId = setTimeout(() => {
      setText(
        (prevText) => prevText + textArray[index].charAt(prevText.length)
      );
    }, typingDelay);

    // Clear interval on unmount or when index reaches the length of textArray
    return () => clearInterval(intervalId);
  }, [text, index]);

  // Reset and move to next text in textArray
  useEffect(() => {
    if (text === textArray[index]) {
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % textArray.length);
        setText("");
      }, 1500); // Delay before typing new text
    }
  }, [text, index]);

  return (
    <h1 className={styles.typewriter}>
      {text}
      <span className={styles.cursor}>&nbsp;</span>
    </h1>
  );
};

export default Typewriter;
