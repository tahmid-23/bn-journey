import BNPronunciation from "../BNPronunciation";
import ConjugationTableBase from "./ConjugationTableBase";

export interface Conjugation {
  conjugation: string;
  pronunciation: string;
}

export interface ConjugationTableProps {
  first: Conjugation;
  secondVeryFamiliar: Conjugation;
  secondFamiliar: Conjugation;
  thirdFamiliar: Conjugation;
  polite: Conjugation;
}

export default function ConjugationTable({
  first,
  secondVeryFamiliar,
  secondFamiliar,
  thirdFamiliar,
  polite,
}: ConjugationTableProps) {
  return (
    <ConjugationTableBase
      columnNode="Conjugation"
      first={
        <BNPronunciation
          bengali={first.conjugation}
          pronunciation={first.pronunciation}
        />
      }
      secondVeryFamiliar={
        <BNPronunciation
          bengali={secondVeryFamiliar.conjugation}
          pronunciation={secondVeryFamiliar.pronunciation}
        />
      }
      secondFamiliar={
        <BNPronunciation
          bengali={secondFamiliar.conjugation}
          pronunciation={secondFamiliar.pronunciation}
        />
      }
      thirdFamiliar={
        <BNPronunciation
          bengali={thirdFamiliar.conjugation}
          pronunciation={thirdFamiliar.pronunciation}
        />
      }
      polite={
        <BNPronunciation
          bengali={polite.conjugation}
          pronunciation={polite.pronunciation}
        />
      }
    />
  );
}
