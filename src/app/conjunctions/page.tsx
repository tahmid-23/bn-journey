import BNText from "@/components/BNText";
import BNPronunciation from "@/components/BNPronunciation";
import TranslationTable from "@/components/table/TranslationTable";
import { Group } from "@mantine/core";
import { Metadata } from "next";
import BasicPage from "@/components/BasicPage";

export const metadata: Metadata = {
  title: "Conjunctions - Bengali Journey",
};

export default function Page() {
  return (
    <BasicPage title="Conjunctions">
      <Group align="start" gap="xl">
        <TranslationTable
          translations={[
            {
              english: "and",
              bengali: (
                <>
                  <BNPronunciation bengali="আর" pronunciation="ar" /> /{" "}
                  <BNPronunciation bengali="ও" pronunciation="o" /> /{" "}
                  <BNPronunciation bengali="এবং" pronunciation="ebong" />
                </>
              ),
            },
            {
              english: "or",
              bengali: (
                <>
                  <BNPronunciation bengali="বা" pronunciation="ba" /> /{" "}
                  <BNPronunciation bengali="অথবা" pronunciation="othoba" />
                </>
              ),
            },
            {
              english: "but",
              bengali: (
                <BNPronunciation bengali="কিন্তু" pronunciation="kintu" />
              ),
            },
            {
              english: "so",
              bengali: <BNPronunciation bengali="তাই" pronunciation="tai" />,
            },
          ]}
        />
        <TranslationTable
          translations={[
            {
              english: "if [... then]",
              bengali: (
                <>
                  <BNText>যদি</BNText> [... <BNText>তখন</BNText>] (jodi [...
                  tokhon])
                </>
              ),
            },
            {
              english: "wherever",
              bengali: (
                <BNPronunciation bengali="যেখানেই" pronunciation="jekhanei" />
              ),
            },
            {
              english: "whenever",
              bengali: <BNPronunciation bengali="যখন" pronunciation="jokhon" />,
            },
            {
              english: "although",
              bengali: <BNPronunciation bengali="যদিও" pronunciation="jodio" />,
            },
            {
              english: "once",
              bengali: (
                <BNPronunciation bengali="একবার" pronunciation="ekbar" />
              ),
            },
          ]}
        />
      </Group>
    </BasicPage>
  );
}
