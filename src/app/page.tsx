import { Text } from "@mantine/core";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Text size="xl">Welcome to Bengali Journey.</Text>
      <Text size="xl">
        Check out the <Link href="/alphabet">alphabet</Link>.
      </Text>
    </div>
  );
}
