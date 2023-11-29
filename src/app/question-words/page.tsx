import BNText from "@/components/BNText";
import TranslationTable from "@/components/table/TranslationTable";
import { Group, Stack, Title } from "@mantine/core";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Question Words - Bengali Journey",
};

export default function Page() {
  return (
    <Stack>
      <Title>Question Words</Title>
      <Group align="start" gap="xl">
        <TranslationTable
          translations={[
            {
              english: "who",
              bengali: (
                <>
                  <BNText>কে</BNText> - (ke)
                </>
              ),
            },
            {
              english: "what",
              bengali: (
                <>
                  <BNText>কি</BNText> - (ki)
                </>
              ),
            },
            {
              english: "where",
              bengali: (
                <>
                  <BNText>কওতয্</BNText> - (kothay)
                </>
              ),
            },
            {
              english: "when",
              bengali: (
                <>
                  <BNText>কখন</BNText> - (kokhon)
                </>
              ),
            },
            {
              english: "why",
              bengali: (
                <>
                  <BNText>কএনও</BNText> - (keno)
                </>
              ),
            },
          ]}
        />
        <TranslationTable
          translations={[
            {
              english: "how",
              bengali: (
                <>
                  <BNText>কএমওন্</BNText> - (kemon)
                </>
              ),
            },
            {
              english: "how (in what way)",
              bengali: (
                <>
                  <BNText>কিভাবে</BNText> - (kibhabe)
                </>
              ),
            },
            {
              english: "how long",
              bengali: (
                <>
                  <BNText>কতক্ষণ</BNText> - (kotokhkhon)
                </>
              ),
            },
            {
              english: "how much",
              bengali: (
                <>
                  <BNText>কত</BNText> - (koto)
                </>
              ),
            },
            {
              english: "which",
              bengali: (
                <>
                  <BNText>কোন</BNText> - (kon)
                </>
              ),
            },
            {
              english: "whose",
              bengali: (
                <>
                  <BNText>কার</BNText> - (kar)
                </>
              ),
            },
            {
              english: "whom",
              bengali: (
                <>
                  <BNText>কাকে</BNText> - (kake)
                </>
              ),
            },
          ]}
        />
      </Group>
    </Stack>
  );
}
