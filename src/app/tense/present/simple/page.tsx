import BNText from "@/components/BNText";
import ConjugationEndingTable from "@/components/table/ConjugationEndingTable";
import ConjugationTable from "@/components/table/ConjugationTable";
import { Group, Stack, Text, Title } from "@mantine/core";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simple Present - Bengali Journey",
};

export default function Page() {
  return (
    <Stack>
      <Title>Simple Present</Title>
      <Text>
        The simple present tense is similar to the English present tense.
        <br />
        English examples would be &quot;I eat&quot; or &quot;she runs&quot;.
      </Text>
      <Text>
        To conjugate in the present tense, remove the verbal ending and mutate
        the first vowel.
        <br />
        Then, based on the subject, formality, and whether the last letter of
        the shortened verb is a consonant, add the corresponding ending.
      </Text>
      <Group gap="xl">
        <div>
          <Title order={3}>Consonant</Title>
          <ConjugationEndingTable
            first={{ ending: "ি", pronunciation: "i" }}
            secondVeryFamiliar={{ ending: "িস", pronunciation: "ish" }}
            secondFamiliar={{ ending: "ো", pronunciation: "o" }}
            thirdFamiliar={{ ending: "ে", pronunciation: "e" }}
            polite={{ ending: "েন", pronunciation: "en" }}
          />
        </div>
        <div>
          <Title order={3}>Vowel</Title>
          <ConjugationEndingTable
            first={{ ending: "ই", pronunciation: "i" }}
            secondVeryFamiliar={{ ending: "ল", pronunciation: "sh" }}
            secondFamiliar={{ ending: "ও", pronunciation: "o" }}
            thirdFamiliar={{ ending: "য়", pronunciation: "y" }}
            polite={{ ending: "ন", pronunciation: "n" }}
          />
        </div>
      </Group>
      <Text>
        The second-person very familiar consonant ending (-<BNText>ো</BNText>)
        may be omitted in writing.
      </Text>
      <br />
      <Title order={2}>Examples</Title>
      <Group>
        <div>
          <Title order={3}>
            Open - <BNText>খোলা</BNText> (khola)
          </Title>
          <ConjugationTable
            first={{ conjugation: "আমি খুলি", pronunciation: "ami khuli" }}
            secondVeryFamiliar={{
              conjugation: "তুই খুলিস",
              pronunciation: "tui khulish",
            }}
            secondFamiliar={{
              conjugation: "তুমি খোল",
              pronunciation: "tumi kholo",
            }}
            thirdFamiliar={{
              conjugation: "সে খোলে",
              pronunciation: "she khole",
            }}
            polite={{ conjugation: "আপনি খোলেন", pronunciation: "apni kholen" }}
          />
        </div>
        <div>
          <Title order={3}>
            Eat - <BNText>খাওয়া</BNText> (khawa)
          </Title>
          <ConjugationTable
            first={{ conjugation: "আমি খাই", pronunciation: "ami khai" }}
            secondVeryFamiliar={{
              conjugation: "তুই খাস",
              pronunciation: "tui khash",
            }}
            secondFamiliar={{
              conjugation: "তুমি খাও",
              pronunciation: "tumi khao",
            }}
            thirdFamiliar={{
              conjugation: "সে খায়",
              pronunciation: "she khay",
            }}
            polite={{ conjugation: "আপনি খান", pronunciation: "apni khan" }}
          />
        </div>
      </Group>
    </Stack>
  );
}
