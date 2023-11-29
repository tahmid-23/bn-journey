"use client";

import BNPronunciation from "@/components/BNPronunciation";
import { List } from "@mantine/core";
import Link from "next/link";

export default function MutationExceptionsV() {
  return (
    <List>
      <List.Item>
        The <Link href="/tense/present/simple">simple present</Link> tense for{" "}
        <BNPronunciation bengali="তুমি" pronunciation="tumi" />, third-person
        familiar (e.g. <BNPronunciation bengali="সে" pronunciation="she" />
        ), and polite (e.g.{" "}
        <BNPronunciation bengali="আপনি" pronunciation="apni" />) forms
      </List.Item>
      <List.Item>
        The present imperative tense for{" "}
        <BNPronunciation bengali="তুই" pronunciation="tui" /> and{" "}
        <BNPronunciation bengali="তুমি" pronunciation="tumi" />
      </List.Item>
      <List.Item>
        For VC and CV verbs, the future tense for{" "}
        <BNPronunciation bengali="আমি" pronunciation="ami" />,{" "}
        <BNPronunciation bengali="তুমি" pronunciation="tumi" />, third-person
        familiar (e.g <BNPronunciation bengali="সে" pronunciation="she" />
        ), and polite (e.g.{" "}
        <BNPronunciation bengali="আপনি" pronunciation="apni" />) forms
      </List.Item>
      <List.Item>
        For CV verbs, the future imperative tense for{" "}
        <BNPronunciation bengali="আমি" pronunciation="ami" /> ,{" "}
        <BNPronunciation bengali="তুমি" pronunciation="tumi" />, third-person
        familiar (e.g <BNPronunciation bengali="সে" pronunciation="she" />
        ), and polite (e.g.{" "}
        <BNPronunciation bengali="আপনি" pronunciation="apni" />) forms
      </List.Item>
    </List>
  );
}
