"use client";

import { LetterData } from "@/alphabet";
import LetterInfoReveal from "@/components/letter/LetterInfoReveal";
import { useCallback, useEffect, useRef, useState } from "react";

function useLetterGenerator(letters: LetterData[]) {
  const prevLettersRef = useRef<LetterData[]>();
  const lastIndexRef = useRef<number>();

  if (prevLettersRef.current !== letters) {
    lastIndexRef.current = undefined;
    prevLettersRef.current = letters;
  }

  return useCallback(() => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * letters.length);
    } while (lastIndexRef.current === newIndex);
    lastIndexRef.current = newIndex;

    const { notes, ...trimmedLetter } = letters[newIndex];
    return trimmedLetter;
  }, [letters]);
}

export interface LetterPracticeProps {
  letters: LetterData[];
}

export default function LetterPractice({ letters }: LetterPracticeProps) {
  const [currentLetter, setCurrentLetter] = useState<LetterData>();
  const [revealed, setRevealed] = useState(false);
  const generateLetter = useLetterGenerator(letters);

  useEffect(() => {
    setCurrentLetter(generateLetter());
  }, [generateLetter]);

  return (
    <>
      {currentLetter && (
        <LetterInfoReveal
          letterData={currentLetter}
          revealed={revealed}
          setRevealed={(nowRevealed) => {
            setRevealed(nowRevealed);
            if (!nowRevealed) {
              setCurrentLetter(generateLetter());
            }
          }}
        />
      )}
    </>
  );
}
