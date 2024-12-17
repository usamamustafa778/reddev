// components/TypingTextManual.js
import { useState, useEffect } from "react";

const TypingTextManual = ({ text, Class, speed = 30 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(displayedText + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, displayedText, speed]);

  return <h1 className={Class}>{displayedText}</h1>;
};

export default TypingTextManual;
