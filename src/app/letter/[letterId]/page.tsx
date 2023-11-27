import { alphabet } from "@/alphabet";
import { notFound } from "next/navigation";
import LetterInfo from "./LetterInfo";

export default function Page({
  params: { letterId },
}: {
  params: { letterId: string };
}) {
  const letterIdNumber = Number(letterId);
  if (isNaN(letterIdNumber)) {
    notFound();
  }

  const letterIndex = letterIdNumber - 1;
  if (letterIndex < 0 || letterIndex >= alphabet.length) {
    notFound();
  }

  const letterData = alphabet[letterIndex];

  return (
    <LetterInfo
      letter={letterData.letter}
      fullName={letterData.fullName}
      vowelMark={letterData.vowelMark}
      pronunciation={letterData.pronunciation}
      pronunciationFile={letterData.pronunciationFile}
      type={letterData.type}
      notes={letterData.notes}
    />
  );
}

export function generateStaticParams() {
  const pages = [];
  for (let i = 1; i <= alphabet.length; ++i) {
    pages.push({ letterId: String(i) });
  }

  return pages;
}
