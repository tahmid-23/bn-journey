import TranslationTable from "@/components/table/TranslationTable";
import { Group, Stack, Title } from "@mantine/core";

export default function Page() {
  return (
    <Stack>
      <Title>Question Words</Title>
      <Group align="start" gap="xl">
        <TranslationTable
          translations={[
            {
              english: "Who",
              bengali: "কে",
              pronunciation: "ke",
            },
            {
              english: "What",
              bengali: "কি",
              pronunciation: "ki",
            },
            {
              english: "Where",
              bengali: "কওতয্",
              pronunciation: "kothay",
            },
            {
              english: "When",
              bengali: "কখন",
              pronunciation: "kokhon",
            },
            {
              english: "Why",
              bengali: "কএনও",
              pronunciation: "keno",
            },
          ]}
        />
        <TranslationTable
          translations={[
            {
              english: "How",
              bengali: "কএমওন্",
              pronunciation: "kemon",
            },
            {
              english: "How (in what way)",
              bengali: "কিভাবে",
              pronunciation: "kibhabe",
            },
            {
              english: "How much",
              bengali: "কত",
              pronunciation: "koto",
            },
            {
              english: "Which",
              bengali: "কোন",
              pronunciation: "kon",
            },
            {
              english: "Whose",
              bengali: "কার",
              pronunciation: "kar",
            },
            {
              english: "Whom",
              bengali: "কাকে",
              pronunciation: "kake",
            },
          ]}
        />
      </Group>
    </Stack>
  );
}
