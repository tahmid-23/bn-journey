import { Text } from "@mantine/core";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Text>Welcome to Bengali journey.</Text>
      <Text>
        Check out the <Link href="/alphabet">alphabet</Link>.
      </Text>
    </div>
  );
}
