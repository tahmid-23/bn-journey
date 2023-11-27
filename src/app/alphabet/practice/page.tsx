import { Metadata } from "next";
import AlphabetChildPageWrapper from "../AlphabetChildPageWrapper";
import LetterPracticeFull from "./LetterPracticeFull";

export const metadata: Metadata = {
  title: "Alphabet Practice - Bengali Journey",
};

export default function Page() {
  return (
    <AlphabetChildPageWrapper>
      <LetterPracticeFull />
    </AlphabetChildPageWrapper>
  );
}
