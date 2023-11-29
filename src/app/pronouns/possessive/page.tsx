import { Stack, Text, Title } from "@mantine/core";
import { Metadata } from "next";
import PronounTable from "../../../components/table/PronounTable";
import BNPronunciation from "@/components/BNPronunciation";

export const metadata: Metadata = {
  title: "Possessive Pronouns - Bengali Journey",
};

export default function Page() {
  return (
    <Stack>
      <Title>Possessive Pronouns</Title>
      <Text>
        Possessive pronouns are pronouns that indicate possession.
        <br />
        In English, examples would be my, your, our, their, etc.
      </Text>
      <br />
      <PronounTable
        first={{
          singular: <BNPronunciation bengali="আমার" pronunciation="amar" />,
          plural: <BNPronunciation bengali="আমাদের" pronunciation="amader" />,
        }}
        second={[
          {
            singular: <BNPronunciation bengali="তোর" pronunciation="tor" />,
            plural: <BNPronunciation bengali="তোদের" pronunciation="toder" />,
          },
          {
            singular: <BNPronunciation bengali="তোমার" pronunciation="tomar" />,
            plural: (
              <BNPronunciation bengali="তোমাদের" pronunciation="tomader" />
            ),
          },
          {
            singular: <BNPronunciation bengali="আপনার" pronunciation="apnar" />,
            plural: (
              <BNPronunciation bengali="আপনাদের" pronunciation="apnader" />
            ),
          },
        ]}
        third={[
          [
            {
              singular: <BNPronunciation bengali="এর" pronunciation="er" />,
              plural: <BNPronunciation bengali="এদের" pronunciation="eder" />,
            },
            {
              singular: <BNPronunciation bengali="এঁর" pronunciation="ẽr" />,
              plural: <BNPronunciation bengali="এঁদের" pronunciation="ẽder" />,
            },
            {
              singular: <BNPronunciation bengali="এটার" pronunciation="etar" />,
              plural: (
                <BNPronunciation bengali="এগুলোর" pronunciation="egulor" />
              ),
            },
          ],
          [
            {
              singular: <BNPronunciation bengali="ওর" pronunciation="or" />,
              plural: <BNPronunciation bengali="ওদের" pronunciation="oder" />,
            },
            {
              singular: <BNPronunciation bengali="ওঁর" pronunciation="õr" />,
              plural: <BNPronunciation bengali="ওঁদের" pronunciation="õder" />,
            },
            {
              singular: <BNPronunciation bengali="ওটার" pronunciation="otar" />,
              plural: (
                <BNPronunciation bengali="ওগুলোর" pronunciation="ogulor" />
              ),
            },
          ],
          [
            {
              singular: <BNPronunciation bengali="তার" pronunciation="tar" />,
              plural: <BNPronunciation bengali="তাদের" pronunciation="tader" />,
            },
            {
              singular: <BNPronunciation bengali="তাঁর" pronunciation="tãr" />,
              plural: (
                <BNPronunciation bengali="তাঁদের" pronunciation="tãder" />
              ),
            },
            {
              singular: (
                <BNPronunciation bengali="সেটার" pronunciation="shetar" />
              ),
              plural: (
                <BNPronunciation bengali="সেগুলোর" pronunciation="shegulor" />
              ),
            },
          ],
        ]}
      />
    </Stack>
  );
}
