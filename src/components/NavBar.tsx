import { Flex, Title } from "@mantine/core";
import Link from "next/link";

export default function NavBar() {
  return (
    <Flex
      className="h-28 px-8"
      style={{ backgroundColor: "var(--mantine-primary-color-filled)" }}
      align="center"
      gap="lg"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" height="100%">
        <path
          fill="#006A4D"
          d="M36 27c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V9c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v18z"
        />
        <circle fill="#F42A41" cx="16" cy="17.5" r="7" />
      </svg>
      <Title order={1}>
        <Link className="text-inherit no-underline" href="/">
          Bengali Journey
        </Link>
      </Title>
    </Flex>
  );
}
