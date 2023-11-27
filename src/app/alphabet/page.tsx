import { Flex, Title, useComputedColorScheme } from "@mantine/core";
import { consonants, vowels } from "@/alphabet";
import { Metadata } from "next";
import AlphabetCell from "./AlphabetCell";

export const metadata: Metadata = {
  title: "Alphabet - Bengali Journey",
};

export default function Page() {
  return (
    <Flex className="min-w-fit" wrap="wrap" gap="md">
      <div className="flex-1">
        <Title order={3}>Vowels: </Title>
        <table className="border-collapse">
          <tbody>
            {vowels.map((vowelRow, vowelRowIndex) => {
              return (
                <tr key={vowelRowIndex}>
                  {vowelRow.map((vowel) => {
                    return (
                      <AlphabetCell
                        key={vowel.pageNumber}
                        letter={vowel.letter}
                        pageNumber={vowel.pageNumber}
                      />
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex-1">
        <Title order={3}>Consonants: </Title>
        <table className="border-collapse">
          <tbody>
            {consonants.map((consonantRow, consonantRowIndex) => {
              return (
                <tr key={consonantRowIndex}>
                  {consonantRow.map((consonant) => {
                    return (
                      <AlphabetCell
                        key={consonant.pageNumber}
                        letter={consonant.letter}
                        pageNumber={consonant.pageNumber}
                      />
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Flex>
  );
}
