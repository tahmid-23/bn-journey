"use client";

import { List, Text } from "@mantine/core";
import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";

interface UnstyledLinkProps {
  href: string;
}

function UnstyledLink({
  href,
  children,
}: PropsWithChildren<UnstyledLinkProps>) {
  return (
    <Link className="text-inherit" href={href}>
      {children}
    </Link>
  );
}

export default function ImportantLinks() {
  return (
    <List>
      <List.Item>
        <UnstyledLink href="/alphabet">
          <Text>Alphabet</Text>
        </UnstyledLink>
      </List.Item>
      <List.Item>
        <UnstyledLink href="/question-words">
          <Text>Question Words</Text>
        </UnstyledLink>
      </List.Item>
      <List.Item>
        <UnstyledLink href="/possession">
          <Text>Possession</Text>
        </UnstyledLink>
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
