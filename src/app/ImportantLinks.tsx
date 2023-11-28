"use client";

import { List, Text } from "@mantine/core";
import Link from "next/link";

export default function ImportantLinks() {
  return (
    <List>
      <List.Item>
        <Link href="/alphabet">
          <Text>Alphabet</Text>
        </Link>
      </List.Item>
      <List.Item>
        <Link href="/pronouns/nominative">
          <Text>Nominative Pronouns</Text>
        </Link>
      </List.Item>
    </List>
  );
}
