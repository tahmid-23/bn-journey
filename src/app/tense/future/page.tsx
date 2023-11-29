import BNText from "@/components/BNText";
import BasicPage from "@/components/BasicPage";
import ConjugationEndingTable from "@/components/table/ConjugationEndingTable";
import ConjugationTable from "@/components/table/ConjugationTable";
import { Title, Group, Text } from "@mantine/core";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Future - Bengali Journey",
};

export default function Page() {
  return (
    <BasicPage title="Simple Past">
      <Text>
        The future tense is to indicate any action that will happen.
        <br />
        English examples would be &quot;I will eat&quot; or &quot;she will
        run&quot;.
      </Text>
      <Text>
        To conjugate in the past tense, remove the verbal ending and{" "}
        <Link href="/verbs/mutation">mutate</Link> the first vowel.
        <br />
        Then, based on the subject and formality, add the corresponding ending.
      </Text>
      <ConjugationEndingTable
        first={{ ending: "বো", pronunciation: "bo" }}
        secondVeryFamiliar={{ ending: "বি", pronunciation: "bi" }}
        secondFamiliar={{ ending: "বে", pronunciation: "be" }}
        thirdFamiliar={{ ending: "বে", pronunciation: "be" }}
        polite={{ ending: "বেন", pronunciation: "ben" }}
      />
      <Text>
        The <BNText>ো</BNText> in the first-person ending may be omitted in
        writing.
      </Text>
      <br />
      <Title order={2}>Examples</Title>
      <Group>
        <div>
          <Title order={3}>
            Open - <BNText>খোলা</BNText> (khola)
          </Title>
          <ConjugationTable
            first={{ conjugation: "আমি খুলবো", pronunciation: "ami khulbo" }}
            secondVeryFamiliar={{
              conjugation: "তুই খুলবি",
              pronunciation: "tui khulbi",
            }}
            secondFamiliar={{
              conjugation: "তুমি খুলবে",
              pronunciation: "tumi khulbe",
            }}
            thirdFamiliar={{
              conjugation: "সে খুলবে",
              pronunciation: "she khulbe",
            }}
            polite={{
              conjugation: "আপনি খুলবেন",
              pronunciation: "apni khulben",
            }}
          />
        </div>
        <div>
          <Title order={3}>
            Eat - <BNText>খাওয়া</BNText> (khawa)
          </Title>
          <ConjugationTable
            first={{ conjugation: "আমি খাবো", pronunciation: "ami khabo" }}
            secondVeryFamiliar={{
              conjugation: "তুই খাবি",
              pronunciation: "tui khabi",
            }}
            secondFamiliar={{
              conjugation: "তুমি খাবে",
              pronunciation: "tumi khabe",
            }}
            thirdFamiliar={{
              conjugation: "সে খাবে",
              pronunciation: "she khabe",
            }}
            polite={{ conjugation: "আপনি খাবেন", pronunciation: "apni khaben" }}
          />
        </div>
      </Group>
    </BasicPage>
  );
}
