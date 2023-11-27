import LetterInfo from "../LetterInfo";
import BNText from "@/components/BNText";

export default function Page() {
  return (
    <LetterInfo
      letter="ও"
      fullName={
        <>
          <BNText>ও</BNText>
        </>
      }
      vowelMark="ো"
      pronunciation="o"
      pronunciationFile="/audio/letter/10.mp3"
      type="Vowel"
    />
  );
}
