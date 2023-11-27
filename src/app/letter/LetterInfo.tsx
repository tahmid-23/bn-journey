import BNText from "@/components/BNText";
import { Button, Paper, Stack, Text } from "@mantine/core";
import Link from "next/link";
import { PropsWithChildren, ReactNode } from "react";

export interface LetterInfoProps {
  letter: string;
  fullName: ReactNode;
  vowelMark: string;
  pronunciation: string;
  type: string;
}

export default function LetterInfo({
  letter: letterName,
  fullName,
  vowelMark,
  pronunciation,
  type,
  children,
}: PropsWithChildren<LetterInfoProps>) {
  return (
    <Stack>
      <Paper className="w-fit" p="md" withBorder>
        <Stack>
          <div>
            <Text className="text-8xl">
              <BNText>{letterName}</BNText>
            </Text>
            <Text>Full name: {fullName}</Text>
            <Text>
              Vowel mark: <BNText>{vowelMark}</BNText>
            </Text>
            <Text>Pronunciation: {pronunciation}</Text>
            <Text>Type: {type}</Text>
          </div>
          {children && (
            <div>
              <Text size="lg">Notes:</Text>
              {children}
            </div>
          )}
        </Stack>
      </Paper>
      <Button className="w-fit">
        <Link className="text-inherit no-underline" href="/alphabet">
          Back to Alphabet
        </Link>
      </Button>
    </Stack>
  );
}
