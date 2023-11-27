import { Stack, Text, Title } from "@mantine/core";
import AlphabetEntry, { AlphabetEntryProps } from "./AlphabetEntry";

type AlphabetCellProps = AlphabetEntryProps;

function AlphabetCell(props: AlphabetCellProps) {
  return (
    <td className="p-2 border border-solid border-white text-center">
      <AlphabetEntry {...props} />
    </td>
  );
}

export default function Page() {
  return (
    <Stack>
      <Text>The Bengali alphabet has 11 vowels.</Text>
      <div>
        <Title order={3}>Vowels: </Title>
        <table className="border-collapse">
          <tbody>
            <tr>
              <AlphabetCell letter="অ" pageNumber={1} />
              <AlphabetCell letter="আ" pageNumber={2} />
              <AlphabetCell letter="ই" pageNumber={3} />
              <AlphabetCell letter="ঈ" pageNumber={4} />
              <AlphabetCell letter="উ" pageNumber={5} />
              <AlphabetCell letter="ঊ" pageNumber={6} />
            </tr>
            <tr>
              <AlphabetCell letter="ঋ" pageNumber={7} />
              <AlphabetCell letter="এ" pageNumber={8} />
              <AlphabetCell letter="ঐ" pageNumber={9} />
              <AlphabetCell letter="ও" pageNumber={10} />
              <AlphabetCell letter="ঔ" pageNumber={11} />
            </tr>
          </tbody>
        </table>
      </div>
    </Stack>
  );
}
