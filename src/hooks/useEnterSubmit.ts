import { KeyboardEvent } from "react";

export const useEnterSubmit = (callback: () => void) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      callback();
    }
  };
  return handleKeyDown;
};
