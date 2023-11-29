import BNText from "../BNText";
import ConjugationTableBase from "./ConjugationTableBase";

export interface Ending {
  ending: string;
  pronunciation: string;
}

interface EndingEntryProps {
  ending: Ending;
}

function EndingEntry({ ending }: EndingEntryProps) {
  return (
    <>
      -<BNText>{ending.ending}</BNText> (-{ending.pronunciation})
    </>
  );
}

export interface ConjugationEndingTableProps {
  first: Ending;
  secondVeryFamiliar: Ending;
  secondFamiliar: Ending;
  thirdFamiliar: Ending;
  polite: Ending;
}

export default function ConjugationEndingTable({
  first,
  secondVeryFamiliar,
  secondFamiliar,
  thirdFamiliar,
  polite,
}: ConjugationEndingTableProps) {
  return (
    <ConjugationTableBase
      columnNode="Ending"
      first={<EndingEntry ending={first} />}
      secondVeryFamiliar={<EndingEntry ending={secondVeryFamiliar} />}
      secondFamiliar={<EndingEntry ending={secondFamiliar} />}
      thirdFamiliar={<EndingEntry ending={thirdFamiliar} />}
      polite={<EndingEntry ending={polite} />}
    />
  );
}
