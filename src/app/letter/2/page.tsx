import LetterInfo from "../LetterInfo";
import BNText from "@/components/BNText";

export default function Page() {
  return (
    <LetterInfo
      letter="আ"
      fullName={
        <>
          <BNText>স্বর আ</BNText> (shôrô a)
        </>
      }
      vowelMark="া"
      pronunciation="a"
      pronunciationFile="/audio/letter/2.mp3"
      type="Vowel"
    />
  );
}
