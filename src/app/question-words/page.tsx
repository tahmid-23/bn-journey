import BNPronunciation from "@/components/BNPronunciation";
import BasicPage from "@/components/BasicPage";
import TranslationTable from "@/components/table/TranslationTable";
import { Group, Stack, Title } from "@mantine/core";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Question Words - Bengali Journey",
};

export default function Page() {
  return (
    <BasicPage title="Question Words">
      <Group align="start" gap="xl">
        <TranslationTable
          translations={[
            {
              english: "who",
              bengali: <BNPronunciation bengali="কে" pronunciation="ke" />,
            },
            {
              english: "what",
              bengali: <BNPronunciation bengali="কি" pronunciation="ki" />,
            },
            {
              english: "where",
              bengali: (
                <BNPronunciation bengali="কওতয্" pronunciation="kothay" />
              ),
            },
            {
              english: "when",
              bengali: <BNPronunciation bengali="কখন" pronunciation="kokhon" />,
            },
            {
              english: "why",
              bengali: <BNPronunciation bengali="কএনও" pronunciation="keno" />,
            },
          ]}
        />
        <TranslationTable
          translations={[
            {
              english: "how",
              bengali: <BNPronunciation bengali="কেমন" pronunciation="kemon" />,
            },
            {
              english: "how (in what way)",
              bengali: (
                <BNPronunciation bengali="কিভাবে" pronunciation="kibhabe" />
              ),
            },
            {
              english: "how long",
              bengali: (
                <BNPronunciation bengali="কতক্ষণ" pronunciation="kotokhkhon" />
              ),
            },
            {
              english: "how much",
              bengali: <BNPronunciation bengali="কত" pronunciation="koto" />,
            },
            {
              english: "which",
              bengali: <BNPronunciation bengali="কোন" pronunciation="kon" />,
            },
            {
              english: "whose",
              bengali: <BNPronunciation bengali="কার" pronunciation="kar" />,
            },
            {
              english: "whom",
              bengali: <BNPronunciation bengali="কাকে" pronunciation="kake" />,
            },
          ]}
        />
      </Group>
    </BasicPage>
  );
}
