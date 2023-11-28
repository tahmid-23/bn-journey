import { ReactNode } from "react";
import TdCell from "./TdCell";
import ThCell from "./ThCell";

export interface PronounEntry {
  singular: ReactNode;
  plural: ReactNode;
}

export interface PronounTableProps {
  first: PronounEntry;
  second: [PronounEntry, PronounEntry, PronounEntry];
  third: [
    [PronounEntry, PronounEntry, PronounEntry],
    [PronounEntry, PronounEntry, PronounEntry],
    [PronounEntry, PronounEntry, PronounEntry],
  ];
}

export default function PronounTable({
  first,
  second,
  third,
}: PronounTableProps) {
  return (
    <table className="w-fit border-collapse">
      <thead>
        <tr>
          <ThCell>Subject</ThCell>
          <ThCell>Proximity</ThCell>
          <ThCell>Honor</ThCell>
          <ThCell>Singular</ThCell>
          <ThCell>Plural</ThCell>
        </tr>
      </thead>
      <tbody>
        <tr>
          <TdCell className="border-t border-b">1 (I/We)</TdCell>
          <TdCell className="border-t border-b" />
          <TdCell className="border-t border-b" />
          <TdCell className="border-t border-b">{first.singular}</TdCell>
          <TdCell className="border-t border-b">{first.plural}</TdCell>
        </tr>
        <tr>
          <TdCell className="border-t border-b" rowSpan={3}>
            2 (You)
          </TdCell>
          <TdCell className="border-t border-b" rowSpan={3} />
          <TdCell className="border-t">Very Familiar</TdCell>
          <TdCell className="border-t">{second[0].singular}</TdCell>
          <TdCell className="border-t">{second[0].plural}</TdCell>
        </tr>
        <tr>
          <TdCell>Familiar</TdCell>
          <TdCell>{second[1].singular}</TdCell>
          <TdCell>{second[1].plural}</TdCell>
        </tr>
        <tr>
          <TdCell className="border-b">Polite</TdCell>
          <TdCell className="border-b">{second[2].singular}</TdCell>
          <TdCell className="border-b">{second[2].plural}</TdCell>
        </tr>
        <tr>
          <TdCell className="border-t" rowSpan={9}>
            3 (He/She/It)
          </TdCell>
          <TdCell className="border-t border-b border-b-gray-500" rowSpan={3}>
            Here
          </TdCell>
          <TdCell className="border-t">Familiar</TdCell>
          <TdCell className="border-t">{third[0][0].singular}</TdCell>
          <TdCell className="border-t">{third[0][0].plural}</TdCell>
        </tr>
        <tr>
          <TdCell>Polite</TdCell>
          <TdCell>{third[0][1].singular}</TdCell>
          <TdCell>{third[0][1].plural}</TdCell>
        </tr>
        <tr>
          <TdCell className="border-b border-gray-500">Inanimate</TdCell>
          <TdCell className="border-b border-gray-500">
            {third[0][2].singular}
          </TdCell>
          <TdCell className="border-b border-gray-500">
            {third[0][2].plural}
          </TdCell>
        </tr>
        <tr>
          <TdCell className="border-t border-b border-gray-500" rowSpan={3}>
            There
          </TdCell>
          <TdCell className="border-t border-gray-500">Familiar</TdCell>
          <TdCell className="border-t border-gray-500">
            {third[1][0].singular}
          </TdCell>
          <TdCell className="border-t border-gray-500">
            {third[1][0].plural}
          </TdCell>
        </tr>
        <tr>
          <TdCell>Polite</TdCell>
          <TdCell>{third[1][1].singular}</TdCell>
          <TdCell>{third[1][1].plural}</TdCell>
        </tr>
        <tr>
          <TdCell className="border-b border-gray-500">Inanimate</TdCell>
          <TdCell className="border-b border-gray-500">
            {third[1][2].singular}
          </TdCell>
          <TdCell className="border-b border-gray-500">
            {third[1][2].plural}
          </TdCell>
        </tr>
        <tr>
          <TdCell className="border-t border-gray-500" rowSpan={3}>
            Elsewhere
          </TdCell>
          <TdCell className="border-t border-gray-500">Familiar</TdCell>
          <TdCell className="border-t border-gray-500">
            {third[2][0].singular}
          </TdCell>
          <TdCell className="border-t border-gray-500">
            {third[2][0].plural}
          </TdCell>
        </tr>
        <tr>
          <TdCell>Polite</TdCell>
          <TdCell>{third[2][1].singular}</TdCell>
          <TdCell>{third[2][1].plural}</TdCell>
        </tr>
        <tr>
          <TdCell>Inanimate</TdCell>
          <TdCell>{third[2][2].singular}</TdCell>
          <TdCell>{third[2][2].plural}</TdCell>
        </tr>
      </tbody>
    </table>
  );
}
