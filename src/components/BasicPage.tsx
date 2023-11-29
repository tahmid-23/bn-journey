import { Stack, Title } from "@mantine/core";
import { PropsWithChildren } from "react";

export interface BasicPageProps {
  title: string;
}

export default function BasicPage({
  title,
  children,
}: PropsWithChildren<BasicPageProps>) {
  return (
    <Stack>
      <Title>{title}</Title>
      {children}
    </Stack>
  );
}
