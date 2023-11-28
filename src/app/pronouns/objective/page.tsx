import BNText from "@/components/BNText";
import { Stack, Text, Title } from "@mantine/core";
import { Metadata } from "next";
import PronounTable from "../PronounTable";

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
          singular: (
            <>
              <BNText>আমাকে</BNText> (amake)
            </>
          ),
          plural: (
            <>
              <BNText>আমাদেরকে</BNText> (amaderke)
            </>
          ),
        }}
        second={[
          {
            singular: (
              <>
                <BNText>তোকে</BNText> (toke)
              </>
            ),
            plural: (
              <>
                <BNText>তোদেরকে</BNText> (toderke)
              </>
            ),
          },
          {
            singular: (
              <>
                <BNText>তোমাকে</BNText> (tomake)
              </>
            ),
            plural: (
              <>
                <BNText>তোমাদেরকে</BNText> (tomaderke)
              </>
            ),
          },
          {
            singular: (
              <>
                <BNText>আপনাকে</BNText> (apnake)
              </>
            ),
            plural: (
              <>
                <BNText>আপনাদেরকে</BNText> (apnaderke)
              </>
            ),
          },
        ]}
        third={[
          [
            {
              singular: (
                <>
                  <BNText>একে</BNText> (eke)
                </>
              ),
              plural: (
                <>
                  <BNText>এদেরকে</BNText> (ederke)
                </>
              ),
            },
            {
              singular: (
                <>
                  <BNText>এঁকে</BNText> (ẽke)
                </>
              ),
              plural: (
                <>
                  <BNText>এঁদেরকে</BNText> (ẽderke)
                </>
              ),
            },
            {
              singular: (
                <>
                  <BNText>এটাকে</BNText> (etake)
                </>
              ),
              plural: (
                <>
                  <BNText>এগুলোকে</BNText> (eguloke)
                </>
              ),
            },
          ],
          [
            {
              singular: (
                <>
                  <BNText>ওকে</BNText> (oke)
                </>
              ),
              plural: (
                <>
                  <BNText>ওদেরকে</BNText> (oderke)
                </>
              ),
            },
            {
              singular: (
                <>
                  <BNText>ওঁকে</BNText> (õke)
                </>
              ),
              plural: (
                <>
                  <BNText>ওঁদেরকে</BNText> (õderke)
                </>
              ),
            },
            {
              singular: (
                <>
                  <BNText>ওটাকে</BNText> (otake)
                </>
              ),
              plural: (
                <>
                  <BNText>ওগুলোকে</BNText> (oguloke)
                </>
              ),
            },
          ],
          [
            {
              singular: (
                <>
                  <BNText>তাকে</BNText> (take)
                </>
              ),
              plural: (
                <>
                  <BNText>তাদেরকে</BNText> (taderke)
                </>
              ),
            },
            {
              singular: (
                <>
                  <BNText>তাঁকে</BNText> (tãke)
                </>
              ),
              plural: (
                <>
                  <BNText>তাঁদেরকে</BNText> (tãderke)
                </>
              ),
            },
            {
              singular: (
                <>
                  <BNText>সেটাকে</BNText> (shetake)
                </>
              ),
              plural: (
                <>
                  <BNText>সেগুলোকে</BNText> (sheguloke)
                </>
              ),
            },
          ],
        ]}
      />
    </Stack>
  );
}
