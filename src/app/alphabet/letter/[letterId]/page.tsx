import { alphabet } from "@/alphabet";
import { notFound } from "next/navigation";
import LetterInfo from "../../../../components/letter/LetterInfo";
import AlphabetChildPageWrapper from "../../AlphabetChildPageWrapper";

function ensureIndex(letterId: string) {
  const letterIdNumber = Number(letterId);
  if (isNaN(letterIdNumber)) {
    notFound();
  }

  const letterIndex = letterIdNumber - 1;
  if (letterIndex < 0 || letterIndex >= alphabet.length) {
    notFound();
  }

  return letterIndex;
}

export const dynamicParams = false;

export default function Page({
  params: { letterId },
}: {
  params: { letterId: string };
}) {
  const letterIndex = ensureIndex(letterId);
  const letterData = alphabet[letterIndex];

  return (
    <AlphabetChildPageWrapper>
      <LetterInfo letterData={letterData} />
    </AlphabetChildPageWrapper>
  );
}

export function generateStaticParams() {
  const pages = [];
  for (let i = 1; i <= alphabet.length; ++i) {
    pages.push({ letterId: String(i) });
  }

  return pages;
}

export function generateMetadata({
  params: { letterId },
}: {
  params: { letterId: string };
}) {
  const letterIndex = ensureIndex(letterId);
  const letterData = alphabet[letterIndex];

  return {
    title: `${letterData.letter} - Bangla Journey`,
  };
}
