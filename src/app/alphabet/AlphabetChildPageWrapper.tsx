import { Stack, Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import { PropsWithChildren } from "react";

export default function AlphabetChildPageWrapper({
  children,
}: PropsWithChildren) {
  return (
    <Stack>
      {children}
      <Link className="text-inherit no-underline" href="/alphabet">
        <Button className="w-fit" leftSection={<IconArrowLeft />}>
          Back to Alphabet
        </Button>
      </Link>
    </Stack>
  );
}
