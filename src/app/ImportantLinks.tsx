"use client";

import { List, Text } from "@mantine/core";
import Link from "next/link";

export default function ImportantLinks() {
  return (
    <List>
      <List.Item>
        <Link className="text-inherit" href="/alphabet">
          <Text>Alphabet</Text>
        </Link>
      </List.Item>
      <List.Item>
        <Text>Pronouns</Text>
        <List>
          <List.Item>
            <Link className="text-inherit" href="/pronouns/nominative">
              <Text>Nominative Pronouns</Text>
            </Link>
          </List.Item>
          <List.Item>
            <Link className="text-inherit" href="/pronouns/objective">
              <Text>Objective Pronouns</Text>
            </Link>
          </List.Item>
          <List.Item>
            <Link className="text-inherit" href="/pronouns/possessive">
              <Text>Possessive Pronouns</Text>
            </Link>
          </List.Item>
        </List>
      </List.Item>
    </List>
  );
}
