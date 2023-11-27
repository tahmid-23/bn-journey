import LetterInfo from "../LetterInfo";
import { Text } from "@mantine/core";
import BNText from "@/components/BNText";

export default function Page() {
  return (
    <LetterInfo
      letter="অ"
      fullName={
        <>
          <BNText>স্বর অ</BNText> (shôrô ô)
        </>
      }
      vowelMark="N/A"
      pronunciation="ɔ"
      pronunciationFile="/audio/letter/1.mp3"
      type="Vowel"
    >
      <Text>This vowel is the &quot;default&quot; vowel sound in Bengali.</Text>
      <Text>This means that an unmarked consonant uses this vowel sound.</Text>
    </LetterInfo>
  );
}
