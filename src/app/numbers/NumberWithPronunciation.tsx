import BNPronunciation from "@/components/BNPronunciation";
import BNText from "@/components/BNText";

export interface NumberWithPronunciationProps {
  numeralNumber: string;
  bnNumber: string;
  pronunciation: string;
}

export default function NumberWithPronunciation({
  numeralNumber,
  bnNumber,
  pronunciation,
}: NumberWithPronunciationProps) {
  return (
    <>
      <BNText>{numeralNumber}</BNText> -{" "}
      <BNPronunciation bengali={bnNumber} pronunciation={pronunciation} />
    </>
  );
}
