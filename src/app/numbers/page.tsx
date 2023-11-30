import BNPronunciation from "@/components/BNPronunciation";
import BasicPage from "@/components/BasicPage";
import TranslationTable from "@/components/table/TranslationTable";
import { Group, Stack, Text, Title } from "@mantine/core";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Numbers - Bengali Journey",
};

export default function Page() {
  return (
    <BasicPage title="Numbers">
      <Group align="start" gap="xl">
        <TranslationTable
          translations={[
            {
              english: "0",
              bengali: (
                <BNPronunciation bengali="শূন্য" pronunciation="shunno" />
              ),
            },
            {
              english: "1",
              bengali: <BNPronunciation bengali="এক" pronunciation="ek" />,
            },
            {
              english: "2",
              bengali: <BNPronunciation bengali="দুই" pronunciation="dui" />,
            },
            {
              english: "3",
              bengali: <BNPronunciation bengali="তিন" pronunciation="tin" />,
            },
            {
              english: "4",
              bengali: <BNPronunciation bengali="চার" pronunciation="char" />,
            },
            {
              english: "5",
              bengali: <BNPronunciation bengali="পাঁচ" pronunciation="pach" />,
            },
            {
              english: "6",
              bengali: <BNPronunciation bengali="ছয়" pronunciation="chhoy" />,
            },
            {
              english: "7",
              bengali: <BNPronunciation bengali="সাত" pronunciation="shat" />,
            },
            {
              english: "8",
              bengali: <BNPronunciation bengali="আট" pronunciation="at" />,
            },
            {
              english: "9",
              bengali: <BNPronunciation bengali="নয়" pronunciation="noy" />,
            },
          ]}
        />
        <TranslationTable
          translations={[
            {
              english: "10",
              bengali: <BNPronunciation bengali="দশ" pronunciation="dosh" />,
            },
            {
              english: "11",
              bengali: (
                <BNPronunciation bengali="এগারো" pronunciation="egaro" />
              ),
            },
            {
              english: "12",
              bengali: <BNPronunciation bengali="বারো" pronunciation="baro" />,
            },
            {
              english: "13",
              bengali: <BNPronunciation bengali="তেরো" pronunciation="tero" />,
            },
            {
              english: "14",
              bengali: (
                <BNPronunciation bengali="চোদ্দ" pronunciation="choddo" />
              ),
            },
            {
              english: "15",
              bengali: <BNPronunciation bengali="পনর" pronunciation="ponro" />,
            },
            {
              english: "16",
              bengali: (
                <BNPronunciation bengali="ষুল্ল" pronunciation="shullo" />
              ),
            },
            {
              english: "17",
              bengali: <BNPronunciation bengali="সতর" pronunciation="shotro" />,
            },
            {
              english: "18",
              bengali: (
                <BNPronunciation bengali="আঠারো" pronunciation="atharo" />
              ),
            },
            {
              english: "19",
              bengali: (
                <BNPronunciation bengali="উনিশ্" pronunciation="unish" />
              ),
            },
          ]}
        />
        <TranslationTable
          translations={[
            {
              english: "20",
              bengali: <BNPronunciation bengali="বিশ" pronunciation="bish" />,
            },
            {
              english: "30",
              bengali: (
                <BNPronunciation bengali="তিরিশ" pronunciation="tirish" />
              ),
            },
            {
              english: "40",
              bengali: (
                <BNPronunciation bengali="চল্লিশ" pronunciation="chollish" />
              ),
            },
            {
              english: "50",
              bengali: (
                <BNPronunciation bengali="পঞ্চাশ" pronunciation="ponchash" />
              ),
            },
            {
              english: "60",
              bengali: <BNPronunciation bengali="ষাট" pronunciation="shat" />,
            },
            {
              english: "70",
              bengali: (
                <BNPronunciation bengali="সত্তর" pronunciation="shottor" />
              ),
            },
            {
              english: "80",
              bengali: <BNPronunciation bengali="আশি" pronunciation="ashi" />,
            },
            {
              english: "90",
              bengali: (
                <BNPronunciation bengali="নব্বই" pronunciation="nobboi" />
              ),
            },
          ]}
        />
        <TranslationTable
          translations={[
            {
              english: "100",
              bengali: <BNPronunciation bengali="একশ" pronunciation="eksho" />,
            },
            {
              english: "1000",
              bengali: (
                <BNPronunciation bengali="এক হাজার" pronunciation="ek hajar" />
              ),
            },
            {
              english: "100,000",
              bengali: (
                <BNPronunciation bengali="এক লাখ" pronunciation="ek lakh" />
              ),
            },
          ]}
        />
      </Group>
      <Text>
        The numbers between 21-99 are somewhat irregular. Although there are
        patterns, it is easier to learn through experience.
      </Text>
    </BasicPage>
  );
}
