import Link from "next/link";
import LetterInfo from "../LetterInfo";
import BNText from "@/components/BNText";
import { Text } from "@mantine/core";

export default function Page() {
  return (
    <LetterInfo
      letter="ঈ"
      fullName={
        <>
          <BNText>দীর্ঘ ঈ</BNText> (dirghô ī)
        </>
      }
      vowelMark="ী"
      pronunciation="i"
      pronunciationFile="/audio/letter/4.mp3"
      type="Vowel"
    >
      <Text>
        This has the same pronunciation as the letter{" "}
        <Link href="/letter/3">
          <BNText>ই</BNText>
        </Link>
        .
      </Text>
      <Text>
        In Sanskrit, <BNText>ই</BNText> had a short i sound, while{" "}
        <BNText>ঈ</BNText> had a long i sound.
      </Text>
      <Text>
        While this distinction does not exist in Bengali, the letters are
        separate for etymological purposes.
      </Text>
    </LetterInfo>
  );
}
