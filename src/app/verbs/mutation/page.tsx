import BNText from "@/components/BNText";
import TdCell from "@/components/table/TdCell";
import ThCell from "@/components/table/ThCell";
import { Stack, Text, Title } from "@mantine/core";
import MutationExceptionsV from "./MutationExceptionsV";
import MutationExceptionsA from "./MutationExceptionsA";

export default function Page() {
  return (
    <Stack>
      <Title>Verb Mutation</Title>
      <Text>
        When conjugating verbs, the first vowel of the verb stem may mutate to
        make a different sound.
      </Text>
      <Text>Vowels mutate as follows:</Text>
      <table className="w-fit border-collapse">
        <thead>
          <tr>
            <ThCell className="border-b">Old Sound</ThCell>
            <ThCell className="border-b">New Sound</ThCell>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TdCell>
              <BNText>এ</BNText> (e)
            </TdCell>
            <TdCell>
              <BNText>ই</BNText> (i)
            </TdCell>
          </tr>
          <tr>
            <TdCell>
              <BNText>এ</BNText> (æ)
            </TdCell>
            <TdCell>
              <BNText>এ</BNText> (e)
            </TdCell>
          </tr>
          <tr>
            <TdCell>
              <BNText>ও</BNText> (o)
            </TdCell>
            <TdCell>
              <BNText>উ</BNText> (u)
            </TdCell>
          </tr>
          <tr>
            <TdCell>
              <BNText>অ</BNText> (o)
            </TdCell>
            <TdCell>
              <BNText>অ</BNText> (ɔ)
            </TdCell>
          </tr>
          <tr>
            <TdCell>
              <BNText>আ</BNText> (a)
            </TdCell>
            <TdCell>
              <BNText>এ</BNText> (e)
            </TdCell>
          </tr>
        </tbody>
      </table>
      <Text>
        Some sources do not consider <BNText>আ</BNText> to have a mutation since
        it only happens in a few, regular cases.
      </Text>
      <Title order={2}>Examples</Title>
      <table className="w-fit border-collapse">
        <thead>
          <tr>
            <ThCell className="border-b">Not Mutated</ThCell>
            <ThCell className="border-b">Mutated</ThCell>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TdCell>
              <BNText>তুমি লেখ</BNText> (tumi lekho)
            </TdCell>
            <TdCell>
              <BNText>আমি লিখি</BNText> (ami likhi)
            </TdCell>
          </tr>
          <tr>
            <TdCell>
              <BNText>তুমি লেখ</BNText> (tumi dækho)
            </TdCell>
            <TdCell>
              <BNText>আমি লিখি</BNText> (ami dekhi)
            </TdCell>
          </tr>
          <tr>
            <TdCell>
              <BNText>তুমি বোঝ</BNText> (tumi bojho)
            </TdCell>
            <TdCell>
              <BNText>আমি বুঝি</BNText> (ami bujhi)
            </TdCell>
          </tr>
          <tr>
            <TdCell>
              <BNText>তুমি বল</BNText> (tumi bolo)
            </TdCell>
            <TdCell>
              <BNText>আমি বলি</BNText> (ami bɔli)
            </TdCell>
          </tr>
          <tr>
            <TdCell>
              <BNText>আমি খাই</BNText> (ami khai)
            </TdCell>
            <TdCell>
              <BNText>আমি খেয়েছি</BNText> (ami kheyechi)
            </TdCell>
          </tr>
        </tbody>
      </table>
      <Text>
        For CVC/VC and CV verb stems, we <em>always</em> mutate the vowel{" "}
        <em>except</em> in the following cases:
      </Text>
      <MutationExceptionsV />
      <Text>
        For CAC/AC and CA verb stems, we <em>never</em> mutate the vowel{" "}
        <em>except</em> in the following cases:
      </Text>
      <MutationExceptionsA />
    </Stack>
  );
}
