import React from "react";
import styles from "./FileUploader.module.scss";

interface FileUploaderProps {
  onFileLoad: (text: string) => void;
}

export const FileUploader: React.FC<FileUploaderProps> = ({ onFileLoad }) => {
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const text = await file.text();
    onFileLoad(text);
  };

  return (
    <div className={styles["file-uploader"]}>
      <input
        type="file"
        accept=".txt,text/plain"
        onChange={handleFileChange}
        className={styles["file-uploader__input"]}
      />
    </div>
  );
};
