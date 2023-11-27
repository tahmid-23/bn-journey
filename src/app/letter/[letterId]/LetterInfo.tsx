import BNText from "@/components/BNText";
import { Button, Paper, Stack, Text } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import { ReactNode } from "react";

export interface LetterInfoProps {
  letter: string;
  fullName: ReactNode;
  vowelMark?: string;
  pronunciation: ReactNode;
  pronunciationFile: string;
  type: string;
  notes?: ReactNode;
}

export default function LetterInfo({
  letter,
  fullName,
  vowelMark,
  pronunciation,
  pronunciationFile,
  type,
  notes,
}: LetterInfoProps) {
  return (
    <Stack>
      <Paper className="w-fit" p="md" withBorder>
        <Stack>
          <div>
            <Text className="text-8xl">
              <BNText>{letter}</BNText>
            </Text>
            <Text>Full name: {fullName}</Text>
            {vowelMark && (
              <Text>
                Vowel mark: <BNText>{vowelMark}</BNText>
              </Text>
            )}
            <Text>Pronunciation: {pronunciation}</Text>
            <audio controls>
              <source src={pronunciationFile} type="audio/mpeg" />
            </audio>
            <Text>Type: {type}</Text>
          </div>
          {notes && (
            <div>
              <Text size="lg">Notes:</Text>
              {notes}
            </div>
          )}
        </Stack>
      </Paper>
      <Link className="text-inherit no-underline" href="/alphabet">
        <Button className="w-fit" leftSection={<IconArrowLeft />}>
          Back to Alphabet
        </Button>
      </Link>
    </Stack>
  );
}
