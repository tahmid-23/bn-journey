import { ReactNode } from "react";
import BNText from "../BNText";
import TdCell from "./TdCell";
import ThCell from "./ThCell";

export interface Translation {
  english: string;
  bengali: ReactNode;
}

export interface TranslationTableProps {
  translations: Translation[];
}

export default function TranslationTable({
  translations,
}: TranslationTableProps) {
  return (
    <table className="w-fit border-collapse">
      <thead>
        <tr>
          <ThCell>English</ThCell>
          <ThCell>Bengali</ThCell>
        </tr>
      </thead>
      <tbody>
        {translations.map(({ english, bengali }) => {
          return (
            <tr key={english}>
              <TdCell>{english}</TdCell>
              <TdCell>{bengali}</TdCell>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
