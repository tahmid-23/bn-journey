"use client";

import BNText from "@/components/BNText";
import { List } from "@mantine/core";
import Link from "next/link";

export default function MutationExceptionsV() {
  return (
    <List>
      <List.Item>
        The <Link href="/tense/present/simple">simple present</Link> tense for{" "}
        <BNText>তুমি</BNText> (tumi), third-person familiar (e.g.{" "}
        <BNText>সে</BNText> (she)), and polite (e.g. <BNText>আপনি</BNText>{" "}
        (apni)) forms
      </List.Item>
      <List.Item>
        The present imperative tense for <BNText>তুই</BNText> (tui) and{" "}
        <BNText>তুমি</BNText> (tumi)
      </List.Item>
      <List.Item>
        For VC and CV verbs, the future tense for <BNText>আমি</BNText> (ami),{" "}
        <BNText>তুমি</BNText> (tumi), third-person familiar (e.g{" "}
        <BNText>সে</BNText> (she)), and polite (e.g. <BNText>আপনি</BNText>{" "}
        (apni)) forms
      </List.Item>
      <List.Item>
        For CV verbs, the future imperative tense for <BNText>আমি</BNText>{" "}
        (ami), <BNText>তুমি</BNText> (tumi), third-person familiar (e.g{" "}
        <BNText>সে</BNText> (she)), and polite (e.g. <BNText>আপনি</BNText>{" "}
        (apni)) forms
      </List.Item>
    </List>
  );
}
