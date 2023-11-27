import LetterInfo from "../LetterInfo";
import BNText from "@/components/BNText";

export default function Page() {
  return (
    <LetterInfo
      letter="ঔ"
      fullName={
        <>
          <BNText>ঔ</BNText>
        </>
      }
      vowelMark="ৌ"
      pronunciation="ou"
      type="Vowel"
    />
  );
}
