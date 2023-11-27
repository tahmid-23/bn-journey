import LetterInfo from "../LetterInfo";
import BNText from "@/components/BNText";

export default function Page() {
  return (
    <LetterInfo
      letter="এ"
      fullName={
        <>
          <BNText>এ</BNText>
        </>
      }
      vowelMark="ে"
      pronunciation="e, æ, or ɛ"
      type="Vowel"
    />
  );
}
