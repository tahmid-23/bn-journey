"use client";

import { LetterData, consonants, vowels } from "@/alphabet";
import BNText from "@/components/BNText";
import { Button, Checkbox, Group, Stack, Text } from "@mantine/core";
import { useState } from "react";

interface LetterRangeCheckboxProps {
  group: LetterData[];
  checked: boolean;
  setChecked: (checked: boolean) => void;
}

function LetterRangeCheckbox({
  group,
  checked,
  setChecked,
}: LetterRangeCheckboxProps) {
  return (
    <Checkbox
      label={
        <>
          <BNText>{group[0].letter}</BNText>-
          <BNText>{group[group.length - 1].letter}</BNText>
        </>
      }
      checked={checked}
      onChange={(e) => {
        setChecked(e.currentTarget.checked);
      }}
    />
  );
}

export interface LetterChoiceProps {
  onStart: (letters: LetterData[]) => void;
}

export default function LetterChoice({ onStart }: LetterChoiceProps) {
  const [vowelsChecked, setVowelsChecked] = useState(vowels.map(() => false));
  const [consonantsChecked, setConsonantsChecked] = useState(
    consonants.map(() => false),
  );
  const [error, setError] = useState<string>();

  return (
    <Stack>
      <Text>Choose the letters that you want to practice.</Text>
      <Group>
        <Text>Vowels:</Text>
        {vowels.map((group, vowelIndex) => (
          <LetterRangeCheckbox
            key={group[0].letter}
            group={group}
            checked={vowelsChecked[vowelIndex]}
            setChecked={(checked) => {
              const newChecked = [...vowelsChecked];
              newChecked[vowelIndex] = checked;
              setVowelsChecked(newChecked);
            }}
          />
        ))}
      </Group>
      <Group>
        <Text>Consonants:</Text>
        {consonants.map((group, consonantIndex) => (
          <LetterRangeCheckbox
            key={group[0].letter}
            group={group}
            checked={consonantsChecked[consonantIndex]}
            setChecked={(checked) => {
              const newChecked = [...consonantsChecked];
              newChecked[consonantIndex] = checked;
              setConsonantsChecked(newChecked);
            }}
          />
        ))}
      </Group>
      <Button
        className="w-fit"
        onClick={() => {
          const selectedVowels = vowels.reduce(
            (prevLetters, group, vowelIndex) => {
              if (vowelsChecked[vowelIndex]) {
                return prevLetters.concat(group);
              }

              return prevLetters;
            },
            [],
          );
          const selectedLetters = consonants.reduce(
            (prevLetters, group, consonantIndex) => {
              if (consonantsChecked[consonantIndex]) {
                return prevLetters.concat(group);
              }

              return prevLetters;
            },
            selectedVowels,
          );

          if (selectedLetters.length === 0) {
            setError("Please choose the letters that you want to practice.");
          } else {
            onStart(selectedLetters);
          }
        }}
      >
        Start
      </Button>
      {error && <Text c="red">{error}</Text>}
    </Stack>
  );
}
