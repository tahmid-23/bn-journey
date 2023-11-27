import { Text } from "@mantine/core";
import LetterInfo from "../LetterInfo";
import BNText from "@/components/BNText";

export default function Page() {
  return (
    <LetterInfo
      letter="ঋ"
      fullName={
        <>
          <BNText>ঋ</BNText>
        </>
      }
      vowelMark="ৃ"
      pronunciation="ri"
      type="Vowel"
    >
      <Text>
        Despite containing an r sound, <BNText>ঋ</BNText> is considered a vowel.
      </Text>
    </LetterInfo>
  );
}
