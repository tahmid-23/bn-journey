import BNText from "@/components/BNText";
import BasicPage from "@/components/BasicPage";
import ConjugationEndingTable from "@/components/table/ConjugationEndingTable";
import ConjugationTable from "@/components/table/ConjugationTable";
import { Group, Text, Title } from "@mantine/core";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Simple Past - Bengali Journey",
};

export default function Page() {
  return (
    <BasicPage title="Simple Past">
      <Text>
        The simple past tense is used to indicate events that happened in the
        near past.
        <br />
        English examples would be &quot;I ate&quot; or &quot;she ran&quot;.
      </Text>
      <Text>
        To conjugate in the past tense, remove the verbal ending and{" "}
        <Link href="/verbs/mutation">mutate</Link> the first vowel.
        <br />
        Then, based on the subject and formality, add the corresponding ending.
      </Text>
      <ConjugationEndingTable
        first={{ ending: "লাম", pronunciation: "lam" }}
        secondVeryFamiliar={{ ending: "লি", pronunciation: "li" }}
        secondFamiliar={{ ending: "লে", pronunciation: "le" }}
        thirdFamiliar={{ ending: "লো", pronunciation: "lo" }}
        polite={{ ending: "লেন", pronunciation: "len" }}
      />
      <Text>
        The <BNText>ো</BNText> in the third-person familiar ending may be
        omitted in writing.
      </Text>
      <br />
      <Title order={2}>Examples</Title>
      <Group>
        <div>
          <Title order={3}>
            Open - <BNText>খোলা</BNText> (khola)
          </Title>
          <ConjugationTable
            first={{ conjugation: "আমি খুললাম", pronunciation: "ami khullam" }}
            secondVeryFamiliar={{
              conjugation: "তুই খুললি",
              pronunciation: "tui khulli",
            }}
            secondFamiliar={{
              conjugation: "তুমি খুললে",
              pronunciation: "tumi khulle",
            }}
            thirdFamiliar={{
              conjugation: "সে খুললো",
              pronunciation: "she khullo",
            }}
            polite={{
              conjugation: "আপনি খুললেন",
              pronunciation: "apni khullen",
            }}
          />
        </div>
        <div>
          <Title order={3}>
            Eat - <BNText>খাওয়া</BNText> (khawa)
          </Title>
          <ConjugationTable
            first={{ conjugation: "আমি খেলাম", pronunciation: "ami khellam" }}
            secondVeryFamiliar={{
              conjugation: "তুই খেলি",
              pronunciation: "tui kheli",
            }}
            secondFamiliar={{
              conjugation: "তুমি খেলে",
              pronunciation: "tumi khele",
            }}
            thirdFamiliar={{
              conjugation: "সে খেলো",
              pronunciation: "she khelo",
            }}
            polite={{ conjugation: "আপনি খেলেন", pronunciation: "apni khelen" }}
          />
        </div>
      </Group>
    </BasicPage>
  );
}
