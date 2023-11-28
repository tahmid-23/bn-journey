import BNText from "@/components/BNText";
import { Stack, Text, Title } from "@mantine/core";
import Link from "next/link";
import PossessionExamples from "./PossessionExamples";

export default function Possession() {
  return (
    <Stack>
      <Title>Possession</Title>
      <Text>
        Possession indicates that something is owned.
        <br />
        In English, an example would be &quot;the <u>woman&apos;s</u>{" "}
        purse&quot;.
      </Text>
      <Text>
        There are also{" "}
        <Link href="/pronouns/possessive">possessive pronouns</Link>.
      </Text>
      <Text>
        To indicate possesion in Bengali, we add <BNText>ের</BNText> to the end
        of the noun.
        <br />
        If the noun already ends in a vowel, then we only add <BNText>
          র
        </BNText>{" "}
        instead.
      </Text>
      <br />
      <Text>Examples:</Text>
      <PossessionExamples />
    </Stack>
  );
}
