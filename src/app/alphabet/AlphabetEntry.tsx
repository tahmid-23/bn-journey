import BNText from "@/components/BNText";
import { Text } from "@mantine/core";
import Link from "next/link";

export interface AlphabetEntryProps {
  letter: string;
  pageNumber: number;
}

export default function AlphabetEntry({
  letter,
  pageNumber,
}: AlphabetEntryProps) {
  return (
    <Text className="text-6xl">
      <Link
        className="text-inherit no-underline"
        href={`/letter/${pageNumber}`}
      >
        <BNText>{letter}</BNText>
      </Link>
    </Text>
  );
}
