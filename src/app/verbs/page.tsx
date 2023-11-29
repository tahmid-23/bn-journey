import BNText from "@/components/BNText";
import BNPronunciation from "@/components/BNPronunciation";
import { Stack, Text, Title } from "@mantine/core";
import Link from "next/link";

export default function Page() {
  return (
    <Stack>
      <Title>Verbs</Title>
      <Text>
        Verbs are typically referred to in their noun form, which ends with{" "}
        <BNText>আ</BNText>. To get the stem of a verb, we remove the verbal noun
        ending.
        <br />
        For most verbs, the verbal noun ending is just{" "}
        <BNPronunciation bengali="আ" pronunciation="a" />. For example, the stem
        of <BNText>বলা</BNText> is <BNText>বল</BNText>.
        <br />
        Verbs whose stems end with a vowel use{" "}
        <BNPronunciation bengali="ওয়া" pronunciation="wa" /> as their verbal
        noun ending. For example, the stem of <BNText>দেওয়া</BNText> is{" "}
        <BNText>দে</BNText>.
      </Text>
      <Text>
        We can classify verb stems into five main classes: CVC/VC, CAC/AC, CV,
        CA, and other. C stands for consonant, V sounds for non-
        <BNText>আ</BNText> vowel, and A stands for <BNText>আ</BNText>.
        <br />
        For example, <BNPronunciation bengali="করা" pronunciation="kora" /> is
        CVC, <BNPronunciation bengali="কাটা" pronunciation="kata" /> is CAC,{" "}
        <BNPronunciation bengali="ধোয়া" pronunciation="dhowa" /> is CV, and{" "}
        <BNPronunciation bengali="খাওয়া" pronunciation="khawa" /> is CA.
      </Text>
      <Text>
        Once we find the stem of a verb, we can conjugate it based on a set of
        rules. Verbs are conjugated based on subject (first-person,
        second-person, third-person) and formality. This means that singular and
        plural subjects use the same conjugation.
        <br />
        Most conjugations will{" "}
        <Link href="/verbs/mutation">mutate the first vowel</Link> of a verb to
        achieve vowel harmony based on the verb stem class.
        <br />
        To conjugate a verb, we mutate the verb stem and add endings based on
        the tense. A good starting point would be the{" "}
        <Link href="/tense/present/simple">simple present</Link> tense.
      </Text>
    </Stack>
  );
}
