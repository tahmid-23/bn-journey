import { ReactNode } from "react";
import TdCell from "./TdCell";
import ThCell from "./ThCell";

export interface ConjugationTableBaseProps {
  columnNode: ReactNode;
  first: ReactNode;
  secondVeryFamiliar: ReactNode;
  secondFamiliar: ReactNode;
  thirdFamiliar: ReactNode;
  polite: ReactNode;
}

export default function ConjugationTableBase({
  columnNode,
  first,
  secondVeryFamiliar,
  secondFamiliar,
  thirdFamiliar,
  polite,
}: ConjugationTableBaseProps) {
  return (
    <table>
      <thead>
        <tr>
          <ThCell>Subject + Formality</ThCell>
          <ThCell>{columnNode}</ThCell>
        </tr>
      </thead>
      <tbody>
        <tr>
          <TdCell>1</TdCell>
          <TdCell>{first}</TdCell>
        </tr>
        <tr>
          <TdCell>2 (Very Familiar)</TdCell>
          <TdCell>{secondVeryFamiliar}</TdCell>
        </tr>
        <tr>
          <TdCell>2 (Familiar)</TdCell>
          <TdCell>{secondFamiliar}</TdCell>
        </tr>
        <tr>
          <TdCell>3 (Familiar)</TdCell>
          <TdCell>{thirdFamiliar}</TdCell>
        </tr>
        <tr>
          <TdCell>2/3 (Polite)</TdCell>
          <TdCell>{polite}</TdCell>
        </tr>
      </tbody>
    </table>
  );
}
