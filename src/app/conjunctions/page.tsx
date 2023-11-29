import BNText from "@/components/BNText";
import TranslationTable from "@/components/table/TranslationTable";
import { Group, Stack, Title } from "@mantine/core";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conjunctions - Bengali Journey",
};

export default function Page() {
  return (
    <Stack>
      <Title>Conjunctions</Title>
      <Group align="start" gap="xl">
        <TranslationTable
          translations={[
            {
              english: "and",
              bengali: (
                <>
                  <BNText>আর</BNText> (ar) / <BNText>ও</BNText> (o) /{" "}
                  <BNText>এবং</BNText> (ebong)
                </>
              ),
            },
            {
              english: "or",
              bengali: (
                <>
                  <BNText>অথবা</BNText> (othoba) / <BNText>বা</BNText> (ba)
                </>
              ),
            },
            {
              english: "but",
              bengali: (
                <>
                  <BNText>কিন্তু</BNText> (kintu)
                </>
              ),
            },
            {
              english: "so",
              bengali: (
                <>
                  <BNText>তাই</BNText> (tai)
                </>
              ),
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
                <>
                  <BNText>যেখানেই</BNText> (jekhanei)
                </>
              ),
            },
            {
              english: "whenever",
              bengali: (
                <>
                  <BNText>যখন</BNText> (jokhon)
                </>
              ),
            },
            {
              english: "although",
              bengali: (
                <>
                  <BNText>যদিও</BNText> (jodio)
                </>
              ),
            },
            {
              english: "once",
              bengali: (
                <>
                  <BNText>একবার</BNText> (ekbar)
                </>
              ),
            },
          ]}
        />
      </Group>
    </Stack>
  );
}
