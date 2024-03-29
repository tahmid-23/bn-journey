"use client";

import { List, Text } from "@mantine/core";
import Link from "next/link";
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
        <UnstyledLink href="/numbers">
          <Text>Numbers</Text>
        </UnstyledLink>
      </List.Item>
      <List.Item>
        <UnstyledLink href="/conjunctions">
          <Text>Conjunctions</Text>
        </UnstyledLink>
      </List.Item>
      <List.Item>
        <UnstyledLink href="/question-words">
          <Text>Question Words</Text>
        </UnstyledLink>
      </List.Item>
      <List.Item>
        <Text>Pronouns</Text>
        <List>
          <List.Item>
            <UnstyledLink href="/pronouns/nominative">
              <Text>Nominative Pronouns</Text>
            </UnstyledLink>
          </List.Item>
          <List.Item>
            <UnstyledLink href="/pronouns/objective">
              <Text>Objective Pronouns</Text>
            </UnstyledLink>
          </List.Item>
          <List.Item>
            <UnstyledLink href="/pronouns/possessive">
              <Text>Possessive Pronouns</Text>
            </UnstyledLink>
          </List.Item>
        </List>
      </List.Item>
      <List.Item>
        <UnstyledLink href="/verbs">
          <Text>Verbs</Text>
        </UnstyledLink>
        <List>
          <List.Item>
            <UnstyledLink href="/verbs/mutation">Mutation</UnstyledLink>
          </List.Item>
          <List.Item>
            <Text>Conjugations</Text>
            <List>
              <List.Item>
                <UnstyledLink href="/tense/present/simple">
                  <Text>Present Simple</Text>
                </UnstyledLink>
              </List.Item>
              <List.Item>
                <UnstyledLink href="/tense/past/simple">
                  <Text>Past Simple</Text>
                </UnstyledLink>
              </List.Item>
              <List.Item>
                <UnstyledLink href="/tense/future">
                  <Text>Future</Text>
                </UnstyledLink>
              </List.Item>
            </List>
          </List.Item>
        </List>
      </List.Item>
    </List>
  );
}
