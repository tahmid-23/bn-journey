import BNText from "@/components/BNText";
import { Stack, Text, Title } from "@mantine/core";
import { Metadata } from "next";
import PronounTable from "../../../components/table/PronounTable";

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
          singular: (
            <>
              <BNText>আমি</BNText> (ami)
            </>
          ),
          plural: (
            <>
              <BNText>আমরা</BNText> (amra)
            </>
          ),
        }}
        second={[
          {
            singular: (
              <>
                <BNText>তুই</BNText> (tui)
              </>
            ),
            plural: (
              <>
                <BNText>তোরা</BNText> (tora)
              </>
            ),
          },
          {
            singular: (
              <>
                <BNText>তুমি</BNText> (tumi)
              </>
            ),
            plural: (
              <>
                <BNText>তোমরা</BNText> (tomra)
              </>
            ),
          },
          {
            singular: (
              <>
                <BNText>আপনি</BNText> (apni)
              </>
            ),
            plural: (
              <>
                <BNText>আপনারা</BNText> (apnara)
              </>
            ),
          },
        ]}
        third={[
          [
            {
              singular: (
                <>
                  <BNText>এ</BNText> (e)
                </>
              ),
              plural: (
                <>
                  <BNText>এরা</BNText> (era)
                </>
              ),
            },
            {
              singular: (
                <>
                  <BNText>ইনি</BNText> (ini)
                </>
              ),
              plural: (
                <>
                  <BNText>এঁরা</BNText> (ẽra)
                </>
              ),
            },
            {
              singular: (
                <>
                  <BNText>এটা</BNText> (eta)
                </>
              ),
              plural: (
                <>
                  <BNText>এগুলো</BNText> (egulo)
                </>
              ),
            },
          ],
          [
            {
              singular: (
                <>
                  <BNText>ও</BNText> (o)
                </>
              ),
              plural: (
                <>
                  <BNText>ওরা</BNText> (ora)
                </>
              ),
            },
            {
              singular: (
                <>
                  <BNText>উনি</BNText> (uni)
                </>
              ),
              plural: (
                <>
                  <BNText>ওঁরা</BNText> (õra)
                </>
              ),
            },
            {
              singular: (
                <>
                  <BNText>ওটা</BNText> (ota)
                </>
              ),
              plural: (
                <>
                  <BNText>ওগুলো</BNText> (ogulo)
                </>
              ),
            },
          ],
          [
            {
              singular: (
                <>
                  <BNText>সে</BNText> (she)
                </>
              ),
              plural: (
                <>
                  <BNText>তারা</BNText> (tara)
                </>
              ),
            },
            {
              singular: (
                <>
                  <BNText>তিনি</BNText> (tini)
                </>
              ),
              plural: (
                <>
                  <BNText>তাঁরা</BNText> (tãra)
                </>
              ),
            },
            {
              singular: (
                <>
                  <BNText>সেটা</BNText> (sheta)
                </>
              ),
              plural: (
                <>
                  <BNText>সেগুলো</BNText> (shegulo)
                </>
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
