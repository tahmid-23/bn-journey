"use client";

import BNText from "@/components/BNText";
import { Text, useComputedColorScheme } from "@mantine/core";
import Link from "next/link";

export interface AlphabetCellProps {
  letter: string;
  pageNumber: number;
}

export default function AlphabetCell({
  letter,
  pageNumber,
}: AlphabetCellProps) {
  const colorScheme = useComputedColorScheme("dark");

  return (
    <td
      className={`p-2 border border-solid border-${
        colorScheme === "dark" ? "white" : "black"
      } text-center`}
    >
      <Text className="text-6xl">
        <Link
          className="text-inherit no-underline"
          href={`/alphabet/letter/${pageNumber}`}
        >
          <BNText>{letter}</BNText>
        </Link>
      </Text>
    </td>
  );
}
