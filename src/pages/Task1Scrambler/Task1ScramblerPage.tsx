import React, { useState } from "react";
import "./styles/App.scss";
import { scrambleText } from "./utils/textUtils";
import { FileUploader } from "./components/FileUploader/FileUploader";
import { TextDisplay } from "./components/TextDisplay/TextDisplay";
import { BackToHome } from "../../components/BackToHome/BackToHome";

export const Task1ScramblerPage: React.FC = () => {
  const [originalText, setOriginalText] = useState("");
  const [scrambledText, setScrambledText] = useState("");

  const handleFileLoad = (text: string) => {
    setOriginalText(text);
    setScrambledText(scrambleText(text));
  };

  return (
    <div className="app">
      <BackToHome />
      <h1 className="app__title">Task 1 — Shuffle Text</h1>

      <FileUploader onFileLoad={handleFileLoad} />

      <div className="app__textareas">
        <TextDisplay title="Original text" value={originalText} />
        <TextDisplay title="Shuffled text" value={scrambledText} />
      </div>
    </div>
  );
};
