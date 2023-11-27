import LetterInfo from "../LetterInfo";
import BNText from "@/components/BNText";

export default function Page() {
  return (
    <LetterInfo
      letter="ঐ"
      fullName={
        <>
          <BNText>ঐ</BNText>
        </>
      }
      vowelMark="ৈ"
      pronunciation="oi"
      pronunciationFile="/audio/letter/9.mp3"
      type="Vowel"
    />
  );
}
