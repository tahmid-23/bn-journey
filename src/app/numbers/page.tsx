import BNText from "@/components/BNText";
import TranslationTable from "@/components/table/TranslationTable";
import { Group, Stack, Text, Title } from "@mantine/core";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Numbers - Bengali Journey",
};

export default function Page() {
  return (
    <Stack>
      <Title>Numbers</Title>
      <Group align="start" gap="xl">
        <TranslationTable
          translations={[
            {
              english: "0",
              bengali: (
                <>
                  <BNText>০</BNText> - <BNText>শূন্য</BNText> (shunno)
                </>
              ),
            },
            {
              english: "1",
              bengali: (
                <>
                  <BNText>১</BNText> - <BNText>এক</BNText> (ek)
                </>
              ),
            },
            {
              english: "2",
              bengali: (
                <>
                  <BNText>২</BNText> - <BNText>দুই</BNText> (dui)
                </>
              ),
            },
            {
              english: "3",
              bengali: (
                <>
                  <BNText>৩</BNText> - <BNText>তিন</BNText> (tin)
                </>
              ),
            },
            {
              english: "4",
              bengali: (
                <>
                  <BNText>৪</BNText> - <BNText>চার</BNText> (char)
                </>
              ),
            },
            {
              english: "5",
              bengali: (
                <>
                  <BNText>৫</BNText> - <BNText>পাঁচ</BNText> (pach)
                </>
              ),
            },
            {
              english: "6",
              bengali: (
                <>
                  <BNText>৬</BNText> - <BNText>ছয়</BNText> (chhoy)
                </>
              ),
            },
            {
              english: "7",
              bengali: (
                <>
                  <BNText>৭</BNText> - <BNText>সাত</BNText> (shat)
                </>
              ),
            },
            {
              english: "8",
              bengali: (
                <>
                  <BNText>৮</BNText> - <BNText>আট</BNText> (at)
                </>
              ),
            },
            {
              english: "9",
              bengali: (
                <>
                  <BNText>৯</BNText> - <BNText>নয়</BNText> (noy)
                </>
              ),
            },
          ]}
        />
        <TranslationTable
          translations={[
            {
              english: "10",
              bengali: (
                <>
                  <BNText>১০</BNText> - <BNText>দশ</BNText> (dosh)
                </>
              ),
            },
            {
              english: "11",
              bengali: (
                <>
                  <BNText>১১</BNText> - <BNText>এগারো</BNText> (egaro)
                </>
              ),
            },
            {
              english: "12",
              bengali: (
                <>
                  <BNText>১২</BNText> - <BNText>বারো</BNText> (baro)
                </>
              ),
            },
            {
              english: "13",
              bengali: (
                <>
                  <BNText>১৩</BNText> - <BNText>তেরো</BNText> (tero)
                </>
              ),
            },
            {
              english: "14",
              bengali: (
                <>
                  <BNText>১৪</BNText> - <BNText>চোদ্দ</BNText> (choddo)
                </>
              ),
            },
            {
              english: "15",
              bengali: (
                <>
                  <BNText>১৫</BNText> - <BNText>পনর</BNText> (ponro)
                </>
              ),
            },
            {
              english: "16",
              bengali: (
                <>
                  <BNText>১৬</BNText> - <BNText>ষুল্ল</BNText> (shullo)
                </>
              ),
            },
            {
              english: "17",
              bengali: (
                <>
                  <BNText>১৭</BNText> - <BNText>সতর</BNText> (shotro)
                </>
              ),
            },
            {
              english: "18",
              bengali: (
                <>
                  <BNText>১৮</BNText> - <BNText>অতরও</BNText> (ataro)
                </>
              ),
            },
            {
              english: "19",
              bengali: (
                <>
                  <BNText>১৯</BNText> - <BNText>উনিশ্</BNText> (unish)
                </>
              ),
            },
          ]}
        />
        <TranslationTable
          translations={[
            {
              english: "20",
              bengali: (
                <>
                  <BNText>২০</BNText> - <BNText>বিশ</BNText> (bish)
                </>
              ),
            },
            {
              english: "30",
              bengali: (
                <>
                  <BNText>৩০</BNText> - <BNText>তিরিশ</BNText> (tirish)
                </>
              ),
            },
            {
              english: "40",
              bengali: (
                <>
                  <BNText>৪০</BNText> - <BNText>চল্লিশ</BNText> (chollish)
                </>
              ),
            },
            {
              english: "50",
              bengali: (
                <>
                  <BNText>৫০</BNText> - <BNText>পঞ্চাশ</BNText> (ponchash)
                </>
              ),
            },
            {
              english: "60",
              bengali: (
                <>
                  <BNText>৬০</BNText> - <BNText>ষাট</BNText> (shat)
                </>
              ),
            },
            {
              english: "70",
              bengali: (
                <>
                  <BNText>৭০</BNText> - <BNText>সত্তর</BNText> (shottor)
                </>
              ),
            },
            {
              english: "80",
              bengali: (
                <>
                  <BNText>৮০</BNText> - <BNText>আশি</BNText> (ashi)
                </>
              ),
            },
            {
              english: "90",
              bengali: (
                <>
                  <BNText>৯০</BNText> - <BNText>নব্বই</BNText> (nobboi)
                </>
              ),
            },
          ]}
        />
        <TranslationTable
          translations={[
            {
              english: "100",
              bengali: (
                <>
                  <BNText>১০০</BNText> - <BNText>একশ</BNText> (eksho)
                </>
              ),
            },
            {
              english: "1000",
              bengali: (
                <>
                  <BNText>১০০০</BNText> - <BNText>এক হাজার</BNText> (ek hajar)
                </>
              ),
            },
            {
              english: "100,000",
              bengali: (
                <>
                  <BNText>১,০০,০০০</BNText> - <BNText>এক লাখ</BNText> (ek lakh)
                </>
              ),
            },
          ]}
        />
      </Group>
      <Text>
        The numbers between 21-99 are somewhat irregular. Although there are
        patterns, it is easier to learn through experience.
      </Text>
    </Stack>
  );
}
