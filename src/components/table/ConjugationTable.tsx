import BNText from "../BNText";
import ConjugationTableBase from "./ConjugationTableBase";

export interface Conjugation {
  conjugation: string;
  pronunciation: string;
}

interface ConjugationEntryProps {
  conjugation: Conjugation;
}

function ConjugationEntry({ conjugation }: ConjugationEntryProps) {
  return (
    <>
      <BNText>{conjugation.conjugation}</BNText> - ({conjugation.pronunciation})
    </>
  );
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
      first={<ConjugationEntry conjugation={first} />}
      secondVeryFamiliar={<ConjugationEntry conjugation={secondVeryFamiliar} />}
      secondFamiliar={<ConjugationEntry conjugation={secondFamiliar} />}
      thirdFamiliar={<ConjugationEntry conjugation={thirdFamiliar} />}
      polite={<ConjugationEntry conjugation={polite} />}
    />
  );
}
