import BNText from "./BNText";

export interface BNPronunciationProps {
  bengali: string;
  pronunciation: string;
}

export default function BNPronunciation({
  bengali,
  pronunciation,
}: BNPronunciationProps) {
  return (
    <>
      <BNText>{bengali}</BNText> - ({pronunciation})
    </>
  );
}
