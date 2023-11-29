import { Stack, Text, Title } from "@mantine/core";
import { Metadata } from "next";
import PronounTable from "../../../components/table/PronounTable";
import BNPronunciation from "@/components/BNPronunciation";

export const metadata: Metadata = {
  title: "Objective Pronouns - Bengali Journey",
};

export default function Page() {
  return (
    <Stack>
      <Title>Objective Pronouns</Title>
      <Text>
        Objective pronouns are pronouns that indicate the direct object or
        indirect object of a sentence.
        <br />
        In English, examples would be me, you, us, them, etc.
      </Text>
      <br />
      <PronounTable
        first={{
          singular: <BNPronunciation bengali="আমাকে" pronunciation="amake" />,
          plural: (
            <BNPronunciation bengali="আমাদেরকে" pronunciation="amaderke" />
          ),
        }}
        second={[
          {
            singular: <BNPronunciation bengali="তোকে" pronunciation="toke" />,
            plural: (
              <BNPronunciation bengali="তোদেরকে" pronunciation="toderke" />
            ),
          },
          {
            singular: (
              <BNPronunciation bengali="তোমাকে" pronunciation="tomake" />
            ),
            plural: (
              <BNPronunciation bengali="তোমাদেরকে" pronunciation="tomaderke" />
            ),
          },
          {
            singular: (
              <BNPronunciation bengali="আপনাকে" pronunciation="apnake" />
            ),
            plural: (
              <BNPronunciation bengali="আপনাদেরকে" pronunciation="apnaderke" />
            ),
          },
        ]}
        third={[
          [
            {
              singular: <BNPronunciation bengali="একে" pronunciation="eke" />,
              plural: (
                <BNPronunciation bengali="এদেরকে" pronunciation="ederke" />
              ),
            },
            {
              singular: <BNPronunciation bengali="এঁকে" pronunciation="ẽke" />,
              plural: (
                <BNPronunciation bengali="এঁদেরকে" pronunciation="ẽderke" />
              ),
            },
            {
              singular: (
                <BNPronunciation bengali="এটাকে" pronunciation="etake" />
              ),
              plural: (
                <BNPronunciation bengali="এগুলোকে" pronunciation="eguloke" />
              ),
            },
          ],
          [
            {
              singular: <BNPronunciation bengali="ওকে" pronunciation="oke" />,
              plural: (
                <BNPronunciation bengali="ওদেরকে" pronunciation="oderke" />
              ),
            },
            {
              singular: <BNPronunciation bengali="ওঁকে" pronunciation="õke" />,
              plural: (
                <BNPronunciation bengali="ওঁদেরকে" pronunciation="õderke" />
              ),
            },
            {
              singular: (
                <BNPronunciation bengali="ওটাকে" pronunciation="otake" />
              ),
              plural: (
                <BNPronunciation bengali="ওগুলোকে" pronunciation="oguloke" />
              ),
            },
          ],
          [
            {
              singular: <BNPronunciation bengali="তাকে" pronunciation="take" />,
              plural: (
                <BNPronunciation bengali="তাদেরকে" pronunciation="taderke" />
              ),
            },
            {
              singular: (
                <BNPronunciation bengali="তাঁকে" pronunciation="tãke" />
              ),
              plural: (
                <BNPronunciation bengali="তাঁদেরকে" pronunciation="tãderke" />
              ),
            },
            {
              singular: (
                <BNPronunciation bengali="সেটাকে" pronunciation="shetake" />
              ),
              plural: (
                <BNPronunciation bengali="সেগুলোকে" pronunciation="sheguloke" />
              ),
            },
          ],
        ]}
      />
    </Stack>
  );
}
