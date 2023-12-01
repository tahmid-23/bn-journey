import BasicPage from "@/components/BasicPage";
import TranslationTable from "@/components/table/TranslationTable";
import { Group, Text } from "@mantine/core";
import { Metadata } from "next";
import NumberWithPronunciation from "./NumberWithPronunciation";

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
                <NumberWithPronunciation
                  numeralNumber="০"
                  bnNumber="শূন্য"
                  pronunciation="shunno"
                />
              ),
            },
            {
              english: "1",
              bengali: (
                <NumberWithPronunciation
                  numeralNumber="১"
                  bnNumber="এক"
                  pronunciation="ek"
                />
              ),
            },
            {
              english: "2",
              bengali: (
                <NumberWithPronunciation
                  numeralNumber="২"
                  bnNumber="দুই"
                  pronunciation="dui"
                />
              ),
            },
            {
              english: "3",
              bengali: (
                <NumberWithPronunciation
                  numeralNumber="৩"
                  bnNumber="তিন"
                  pronunciation="tin"
                />
              ),
            },
            {
              english: "4",
              bengali: (
                <NumberWithPronunciation
                  numeralNumber="৪"
                  bnNumber="চার"
                  pronunciation="char"
                />
              ),
            },
            {
              english: "5",
              bengali: (
                <NumberWithPronunciation
                  numeralNumber="৫"
                  bnNumber="পাঁচ"
                  pronunciation="pach"
                />
              ),
            },
            {
              english: "6",
              bengali: (
                <NumberWithPronunciation
                  numeralNumber="৬"
                  bnNumber="ছয়"
                  pronunciation="chhoy"
                />
              ),
            },
            {
              english: "7",
              bengali: (
                <NumberWithPronunciation
                  numeralNumber="৭"
                  bnNumber="সাত"
                  pronunciation="shat"
                />
              ),
            },
            {
              english: "8",
              bengali: (
                <NumberWithPronunciation
                  numeralNumber="৮"
                  bnNumber="আট"
                  pronunciation="at"
                />
              ),
            },
            {
              english: "9",
              bengali: (
                <NumberWithPronunciation
                  numeralNumber="৯"
                  bnNumber="নয়"
                  pronunciation="noy"
                />
              ),
            },
          ]}
        />
        <TranslationTable
          translations={[
            {
              english: "10",
              bengali: (
                <NumberWithPronunciation
                  numeralNumber="১০"
                  bnNumber="দশ"
                  pronunciation="dosh"
                />
              ),
            },
            {
              english: "11",
              bengali: (
                <NumberWithPronunciation
                  numeralNumber="১১"
                  bnNumber="এগারো"
                  pronunciation="egaro"
                />
              ),
            },
            {
              english: "12",
              bengali: (
                <NumberWithPronunciation
                  numeralNumber="১২"
                  bnNumber="বারো"
                  pronunciation="baro"
                />
              ),
            },
            {
              english: "13",
              bengali: (
                <NumberWithPronunciation
                  numeralNumber="১৩"
                  bnNumber="তেরো"
                  pronunciation="tero"
                />
              ),
            },
            {
              english: "14",
              bengali: (
                <NumberWithPronunciation
                  numeralNumber="১৪"
                  bnNumber="চোদ্দ"
                  pronunciation="choddo"
                />
              ),
            },
            {
              english: "15",
              bengali: (
                <NumberWithPronunciation
                  numeralNumber="১৫"
                  bnNumber="পনর"
                  pronunciation="ponro"
                />
              ),
            },
            {
              english: "16",
              bengali: (
                <NumberWithPronunciation
                  numeralNumber="১৬"
                  bnNumber="ষুল্ল"
                  pronunciation="shullo"
                />
              ),
            },
            {
              english: "17",
              bengali: (
                <NumberWithPronunciation
                  numeralNumber="১৭"
                  bnNumber="সতর"
                  pronunciation="shotro"
                />
              ),
            },
            {
              english: "18",
              bengali: (
                <NumberWithPronunciation
                  numeralNumber="১৮"
                  bnNumber="আঠারো"
                  pronunciation="atharo"
                />
              ),
            },
            {
              english: "19",
              bengali: (
                <NumberWithPronunciation
                  numeralNumber="১৯"
                  bnNumber="উনিশ্"
                  pronunciation="unish"
                />
              ),
            },
          ]}
        />
        <TranslationTable
          translations={[
            {
              english: "20",
              bengali: (
                <NumberWithPronunciation
                  numeralNumber="২০"
                  bnNumber="বিশ"
                  pronunciation="bish"
                />
              ),
            },
            {
              english: "30",
              bengali: (
                <NumberWithPronunciation
                  numeralNumber="৩০"
                  bnNumber="তিরিশ"
                  pronunciation="tirish"
                />
              ),
            },
            {
              english: "40",
              bengali: (
                <NumberWithPronunciation
                  numeralNumber="৪০"
                  bnNumber="চল্লিশ"
                  pronunciation="chollish"
                />
              ),
            },
            {
              english: "50",
              bengali: (
                <NumberWithPronunciation
                  numeralNumber="৫০"
                  bnNumber="পঞ্চাশ"
                  pronunciation="ponchash"
                />
              ),
            },
            {
              english: "60",
              bengali: (
                <NumberWithPronunciation
                  numeralNumber="৬০"
                  bnNumber="ষাট"
                  pronunciation="shat"
                />
              ),
            },
            {
              english: "70",
              bengali: (
                <NumberWithPronunciation
                  numeralNumber="৭০"
                  bnNumber="সত্তর"
                  pronunciation="shottor"
                />
              ),
            },
            {
              english: "80",
              bengali: (
                <NumberWithPronunciation
                  numeralNumber="৮০"
                  bnNumber="আশি"
                  pronunciation="ashi"
                />
              ),
            },
            {
              english: "90",
              bengali: (
                <NumberWithPronunciation
                  numeralNumber="৯০"
                  bnNumber="নব্বই"
                  pronunciation="nobboi"
                />
              ),
            },
          ]}
        />
        <TranslationTable
          translations={[
            {
              english: "100",
              bengali: (
                <NumberWithPronunciation
                  numeralNumber="১০০"
                  bnNumber="একশ"
                  pronunciation="eksho"
                />
              ),
            },
            {
              english: "1000",
              bengali: (
                <NumberWithPronunciation
                  numeralNumber="১০০০"
                  bnNumber="এক হাজার"
                  pronunciation="ek hajar"
                />
              ),
            },
            {
              english: "100,000",
              bengali: (
                <NumberWithPronunciation
                  numeralNumber="১,০০,০০০"
                  bnNumber="এক লাখ"
                  pronunciation="ek lakh"
                />
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
