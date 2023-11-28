import { Text } from "@mantine/core";
import ImportantLinks from "./ImportantLinks";

export default function Page() {
  return (
    <div>
      <Text size="xl">Welcome to Bengali Journey.</Text>
      <Text>Links:</Text>
      <ImportantLinks />
    </div>
  );
}
