"use client";

import BNText from "@/components/BNText";
import { List, Text } from "@mantine/core";

export default function PossessionExamples() {
  return (
    <List>
      <List.Item>
        <Text>
          The <span className="text-green-500">cat</span>
          <span className="text-red-500">&apos;s</span> milk -{" "}
          <BNText>
            <span className="text-green-500">বিড়া</span>
            <span className="text-red-500">লের</span> দুধ
          </BNText>{" "}
          (biraler dudh)
        </Text>
      </List.Item>
      <List.Item>
        <Text>
          The <span className="text-green-500">king</span>
          <span className="text-red-500">&apos;s</span> crown -{" "}
          <BNText>
            <span className="text-green-500">রাজা</span>
            <span className="text-red-500">র</span> মুকুট
          </BNText>{" "}
          (rajar mukut)
        </Text>
      </List.Item>
    </List>
  );
}
