import { bengaliFont } from "@/font";
import { PropsWithChildren } from "react";

export default function BNText({ children }: PropsWithChildren) {
  return <span className={bengaliFont.className}>{children}</span>;
}
