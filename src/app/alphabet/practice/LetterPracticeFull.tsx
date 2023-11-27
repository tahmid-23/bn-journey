"use client";

import { LetterData } from "@/alphabet";
import { useState } from "react";
import LetterChoice from "./LetterChoice";
import LetterPractice from "./LetterPractice";

export default function LetterPracticeFull() {
  const [letters, setLetters] = useState<LetterData[]>();

  return letters ? (
    <LetterPractice letters={letters} />
  ) : (
    <LetterChoice onStart={setLetters} />
  );
}
