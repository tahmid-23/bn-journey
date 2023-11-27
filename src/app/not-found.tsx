import { Button, Stack, Text } from "@mantine/core";
import { IconHome } from "@tabler/icons-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <Stack>
      <Text>Page not found.</Text>
      <Link href="/">
        <Button leftSection={<IconHome />}>Go back home</Button>
      </Link>
    </Stack>
  );
}
