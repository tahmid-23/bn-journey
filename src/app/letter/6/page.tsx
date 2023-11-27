import Link from "next/link";
import LetterInfo from "../LetterInfo";
import BNText from "@/components/BNText";
import { Text } from "@mantine/core";

export default function Page() {
  return (
    <LetterInfo
      letter="উ"
      fullName={
        <>
          <BNText>দীর্ঘ উ</BNText> (dirghô ū)
        </>
      }
      vowelMark="ূ"
      pronunciation="u"
      pronunciationFile="/audio/letter/6.mp3"
      type="Vowel"
    >
      <Text>
        This has the same pronunciation as the letter{" "}
        <Link href="/letter/5">
          <BNText>উ</BNText>
        </Link>
        .
      </Text>
      <Text>
        In Sanskrit, <BNText>উ</BNText> had a short u sound, while{" "}
        <BNText>ঊ</BNText> had a long u sound.
      </Text>
      <Text>
        While this distinction does not exist in Bengali, the letters are
        separate for etymological purposes.
      </Text>
    </LetterInfo>
  );
}
