import BNText from "@/components/BNText";
import { Stack, Text, Title } from "@mantine/core";
import { Metadata } from "next";
import PronounTable from "../PronounTable";

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
          singular: (
            <>
              <BNText>আমার</BNText> (amar)
            </>
          ),
          plural: (
            <>
              <BNText>আমাদের</BNText> (amader)
            </>
          ),
        }}
        second={[
          {
            singular: (
              <>
                <BNText>তোর</BNText> (tor)
              </>
            ),
            plural: (
              <>
                <BNText>তোদের</BNText> (toder)
              </>
            ),
          },
          {
            singular: (
              <>
                <BNText>তোমার</BNText> (tomar)
              </>
            ),
            plural: (
              <>
                <BNText>তোমাদের</BNText> (tomader)
              </>
            ),
          },
          {
            singular: (
              <>
                <BNText>আপনার</BNText> (apnar)
              </>
            ),
            plural: (
              <>
                <BNText>আপনাদের</BNText> (apnader)
              </>
            ),
          },
        ]}
        third={[
          [
            {
              singular: (
                <>
                  <BNText>এর</BNText> (er)
                </>
              ),
              plural: (
                <>
                  <BNText>এদের</BNText> (eder)
                </>
              ),
            },
            {
              singular: (
                <>
                  <BNText>এঁর</BNText> (ẽr)
                </>
              ),
              plural: (
                <>
                  <BNText>এঁদের</BNText> (ẽder)
                </>
              ),
            },
            {
              singular: (
                <>
                  <BNText>এটার</BNText> (etar)
                </>
              ),
              plural: (
                <>
                  <BNText>এগুলোর</BNText> (egulor)
                </>
              ),
            },
          ],
          [
            {
              singular: (
                <>
                  <BNText>ওর</BNText> (or)
                </>
              ),
              plural: (
                <>
                  <BNText>ওদের</BNText> (oder)
                </>
              ),
            },
            {
              singular: (
                <>
                  <BNText>ওঁর</BNText> (õr)
                </>
              ),
              plural: (
                <>
                  <BNText>ওঁদের</BNText> (õder)
                </>
              ),
            },
            {
              singular: (
                <>
                  <BNText>ওটার</BNText> (otar)
                </>
              ),
              plural: (
                <>
                  <BNText>ওগুলোর</BNText> (ogulor)
                </>
              ),
            },
          ],
          [
            {
              singular: (
                <>
                  <BNText>তার</BNText> (tar)
                </>
              ),
              plural: (
                <>
                  <BNText>তাদের</BNText> (tader)
                </>
              ),
            },
            {
              singular: (
                <>
                  <BNText>তাঁর</BNText> (tãr)
                </>
              ),
              plural: (
                <>
                  <BNText>তাঁদের</BNText> (tãder)
                </>
              ),
            },
            {
              singular: (
                <>
                  <BNText>সেটার</BNText> (shetar)
                </>
              ),
              plural: (
                <>
                  <BNText>সেগুলোর</BNText> (shegulor)
                </>
              ),
            },
          ],
        ]}
      />
    </Stack>
  );
}
