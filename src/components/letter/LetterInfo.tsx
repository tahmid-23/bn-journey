"use client";

import { LetterData } from "@/alphabet";
import BNText from "@/components/BNText";
import { ActionIcon, Group, Paper, Stack, Text } from "@mantine/core";
import { IconPlayerPlay } from "@tabler/icons-react";
import { PropsWithChildren, ReactNode, useEffect, useRef } from "react";

export interface LetterInfoProps {
  letterData: LetterData;
  showFullInfo?: boolean;
}

export default function LetterInfo({
  letterData: {
    letter,
    fullName,
    vowelMark,
    pronunciation,
    pronunciationFile,
    type,
    notes,
  },
  showFullInfo = true,
  children,
}: PropsWithChildren<LetterInfoProps>) {
  const audioRef = useRef<HTMLAudioElement>();

  useEffect(() => {
    audioRef.current = new Audio(pronunciationFile);
  }, [pronunciationFile]);

  return (
    <Paper className="w-fit" p="md" withBorder>
      <Stack>
        <div>
          <Text className="text-8xl">
            <BNText>{letter}</BNText>
          </Text>
          {showFullInfo && (
            <>
              <Text>Full name: {fullName}</Text>
              {vowelMark && (
                <Text>
                  Vowel mark: <BNText>{vowelMark}</BNText>
                </Text>
              )}
              <Group gap="xs">
                <Text>Pronunciation: {pronunciation}</Text>
                <ActionIcon size="sm" onClick={() => audioRef.current?.play()}>
                  <IconPlayerPlay size="1rem" />
                </ActionIcon>
              </Group>
              <Text>Type: {type}</Text>
            </>
          )}
        </div>
        {showFullInfo && notes && (
          <div>
            <Text size="lg">Notes:</Text>
            {notes}
          </div>
        )}
        {children}
      </Stack>
    </Paper>
  );
}
