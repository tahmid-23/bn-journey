import BNText from "@/components/BNText";
import TdCell from "@/components/table/TdCell";
import ThCell from "@/components/table/ThCell";
import { Stack, Text, Title } from "@mantine/core";
import MutationExceptionsV from "./MutationExceptionsV";
import MutationExceptionsA from "./MutationExceptionsA";
import BNPronunciation from "@/components/BNPronunciation";
import BasicPage from "@/components/BasicPage";

export default function Page() {
  return (
    <BasicPage title="Verb Mutation">
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
              <BNPronunciation bengali="এ" pronunciation="e" />
            </TdCell>
            <TdCell>
              <BNPronunciation bengali="ই" pronunciation="i" />
            </TdCell>
          </tr>
          <tr>
            <TdCell>
              <BNPronunciation bengali="এ" pronunciation="æ" />
            </TdCell>
            <TdCell>
              <BNPronunciation bengali="এ" pronunciation="e" />
            </TdCell>
          </tr>
          <tr>
            <TdCell>
              <BNPronunciation bengali="ও" pronunciation="o" />
            </TdCell>
            <TdCell>
              <BNPronunciation bengali="উ" pronunciation="u" />
            </TdCell>
          </tr>
          <tr>
            <TdCell>
              <BNPronunciation bengali="অ" pronunciation="o" />
            </TdCell>
            <TdCell>
              <BNPronunciation bengali="অ" pronunciation="ɔ" />
            </TdCell>
          </tr>
          <tr>
            <TdCell>
              <BNPronunciation bengali="আ" pronunciation="a" />
            </TdCell>
            <TdCell>
              <BNPronunciation bengali="এ" pronunciation="e" />
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
              <BNPronunciation bengali="তুমি লেখ" pronunciation="tumi lekho" />
            </TdCell>
            <TdCell>
              <BNPronunciation bengali="আমি লিখি" pronunciation="ami likhi" />
            </TdCell>
          </tr>
          <tr>
            <TdCell>
              <BNPronunciation bengali="তুমি লেখ" pronunciation="tumi dækho" />
            </TdCell>
            <TdCell>
              <BNPronunciation bengali="আমি লিখি" pronunciation="ami dekhi" />
            </TdCell>
          </tr>
          <tr>
            <TdCell>
              <BNPronunciation bengali="তুমি বোঝ" pronunciation="tumi bojho" />
            </TdCell>
            <TdCell>
              <BNPronunciation bengali="আমি বুঝি" pronunciation="ami bujhi" />
            </TdCell>
          </tr>
          <tr>
            <TdCell>
              <BNPronunciation bengali="তুমি বল" pronunciation="tumi bolo" />
            </TdCell>
            <TdCell>
              <BNPronunciation bengali="আমি বলি" pronunciation="ami bɔli" />
            </TdCell>
          </tr>
          <tr>
            <TdCell>
              <BNPronunciation bengali="আমি খাই" pronunciation="ami khai" />
            </TdCell>
            <TdCell>
              <BNPronunciation
                bengali="আমি খেয়েছি"
                pronunciation="ami kheyechi"
              />
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
    </BasicPage>
  );
}
