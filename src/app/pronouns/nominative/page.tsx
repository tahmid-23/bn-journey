import { Stack, Text, Title } from "@mantine/core";
import { Metadata } from "next";
import PronounTable from "../../../components/table/PronounTable";
import BNPronunciation from "@/components/BNPronunciation";

export const metadata: Metadata = {
  title: "Nominative Pronouns - Bengali Journey",
};

export default function Page() {
  return (
    <Stack>
      <Title>Nominative Pronouns</Title>
      <Text>
        Nominative pronouns are pronouns that indicate the subject of a
        sentence.
        <br />
        In English, examples would be I, you, we, they, etc.
      </Text>
      <Text>
        In Bengali, pronouns are similar to English. There are first-, second-,
        and third-person pronouns, as well as singular and plural pronouns.
      </Text>
      <br />
      <PronounTable
        first={{
          singular: <BNPronunciation bengali="আমি" pronunciation="ami" />,
          plural: <BNPronunciation bengali="আমরা" pronunciation="amra" />,
        }}
        second={[
          {
            singular: <BNPronunciation bengali="তুই" pronunciation="tui" />,
            plural: <BNPronunciation bengali="তোরা" pronunciation="tora" />,
          },
          {
            singular: <BNPronunciation bengali="তুমি" pronunciation="tumi" />,
            plural: <BNPronunciation bengali="তোমরা" pronunciation="tomra" />,
          },
          {
            singular: <BNPronunciation bengali="আপনি" pronunciation="apni" />,
            plural: <BNPronunciation bengali="আপনারা" pronunciation="apnara" />,
          },
        ]}
        third={[
          [
            {
              singular: <BNPronunciation bengali="এ" pronunciation="e" />,
              plural: <BNPronunciation bengali="এরা" pronunciation="era" />,
            },
            {
              singular: <BNPronunciation bengali="ইনি" pronunciation="ini" />,
              plural: <BNPronunciation bengali="এঁরা" pronunciation="ẽra" />,
            },
            {
              singular: <BNPronunciation bengali="এটা" pronunciation="eta" />,
              plural: <BNPronunciation bengali="এগুলো" pronunciation="egulo" />,
            },
          ],
          [
            {
              singular: <BNPronunciation bengali="ও" pronunciation="o" />,
              plural: <BNPronunciation bengali="ওরা" pronunciation="ora" />,
            },
            {
              singular: <BNPronunciation bengali="উনি" pronunciation="uni" />,
              plural: <BNPronunciation bengali="ওঁরা" pronunciation="õra" />,
            },
            {
              singular: <BNPronunciation bengali="ওটা" pronunciation="ota" />,
              plural: <BNPronunciation bengali="ওগুলো" pronunciation="ogulo" />,
            },
          ],
          [
            {
              singular: <BNPronunciation bengali="সে" pronunciation="she" />,
              plural: <BNPronunciation bengali="তারা" pronunciation="tara" />,
            },
            {
              singular: <BNPronunciation bengali="তিনি" pronunciation="tini" />,
              plural: <BNPronunciation bengali="তাঁরা" pronunciation="tãra" />,
            },
            {
              singular: (
                <BNPronunciation bengali="সেটা" pronunciation="sheta" />
              ),
              plural: (
                <BNPronunciation bengali="সেগুলো" pronunciation="shegulo" />
              ),
            },
          ],
        ]}
      />
      <Text>
        Pronouns have a concept of &quot;honor&quot;, which are used to show
        respect.
        <br />
        The very familiar second-person pronouns can also be considered
        derogatory.
      </Text>
      <Text>
        Third-person pronouns also have a sense of proximity. You can refer to
        people or objects as being here (present in the discussion), there
        (nearby but not present), or elsewhere (not nearby).
      </Text>
    </Stack>
  );
}
