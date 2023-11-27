"use client";

import { useComputedColorScheme } from "@mantine/core";
import AlphabetEntry, { AlphabetEntryProps } from "./AlphabetEntry";

export type AlphabetCellProps = AlphabetEntryProps;

export default function AlphabetCell(props: AlphabetCellProps) {
  const colorScheme = useComputedColorScheme("dark");

  return (
    <td
      className={`p-2 border border-solid border-${
        colorScheme === "dark" ? "white" : "black"
      } text-center`}
    >
      <AlphabetEntry {...props} />
    </td>
  );
}
