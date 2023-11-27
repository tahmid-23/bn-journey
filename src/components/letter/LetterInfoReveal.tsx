"use client";

import LetterInfo, { LetterInfoProps } from "./LetterInfo";
import { Button } from "@mantine/core";

export type LetterInfoRevealProps = Omit<LetterInfoProps, "showFullInfo"> & {
  revealed?: boolean;
  setRevealed?: (revealed: boolean) => void;
};

export default function LetterInfoReveal({
  revealed = false,
  setRevealed,
  ...props
}: LetterInfoRevealProps) {
  return (
    <LetterInfo {...props} showFullInfo={revealed}>
      {revealed ? (
        <Button onClick={() => setRevealed?.(false)}>Next</Button>
      ) : (
        <Button onClick={() => setRevealed?.(true)}>Show</Button>
      )}
    </LetterInfo>
  );
}
