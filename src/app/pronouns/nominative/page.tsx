import BNText from "@/components/BNText";
import { Stack, Text, Title } from "@mantine/core";
import { Metadata } from "next";
import { PropsWithChildren, TdHTMLAttributes, ThHTMLAttributes } from "react";

function ThCell({
  className,
  children,
  ...props
}: PropsWithChildren<ThHTMLAttributes<HTMLTableCellElement>>) {
  return (
    <th
      {...props}
      className={`p-2 border-0 border-b border-solid ${className}`}
    >
      {children}
    </th>
  );
}

function TdCell({
  className,
  children,
  ...props
}: PropsWithChildren<TdHTMLAttributes<HTMLTableCellElement>>) {
  return (
    <td {...props} className={`p-2 border-0 border-solid ${className}`}>
      {children}
    </td>
  );
}

export const metadata: Metadata = {
  title: "Nominative Pronouns - Bengali Journey",
};

export default function Page() {
  return (
    <Stack>
      <Title>Nominative Pronouns</Title>
      <Text>
        Nominative pronouns are pronouns that indicate the subject of a
        sentence.
        <br />
        In English, examples would be I, you, we, they, etc.
      </Text>
      <Text>
        In Bengali, pronouns are similar to English. There are first-, second-,
        and third-person pronouns, as well as singular and plural pronouns.
      </Text>
      <br />
      <table className="w-fit border-collapse">
        <thead>
          <tr>
            <ThCell>Subject</ThCell>
            <ThCell>Proximity</ThCell>
            <ThCell>Honor</ThCell>
            <ThCell>Singular</ThCell>
            <ThCell>Plural</ThCell>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TdCell className="border-t border-b">1 (I/We)</TdCell>
            <TdCell className="border-t border-b" />
            <TdCell className="border-t border-b" />
            <TdCell className="border-t border-b">
              <BNText>আমি</BNText> (ami)
            </TdCell>
            <TdCell className="border-t border-b">
              <BNText>আমরা</BNText> (amra)
            </TdCell>
          </tr>
          <tr>
            <TdCell className="border-t border-b" rowSpan={3}>
              2 (You)
            </TdCell>
            <TdCell className="border-t border-b" rowSpan={3} />
            <TdCell className="border-t">Very Familiar</TdCell>
            <TdCell className="border-t">
              <BNText>তুই</BNText> (tui)
            </TdCell>
            <TdCell className="border-t">
              <BNText>তোরা</BNText> (tora)
            </TdCell>
          </tr>
          <tr>
            <TdCell>Familiar</TdCell>
            <TdCell>
              <BNText>তুমি</BNText> (tumi)
            </TdCell>
            <TdCell>
              <BNText>তোমরা</BNText> (tomra)
            </TdCell>
          </tr>
          <tr>
            <TdCell className="border-b">Polite</TdCell>
            <TdCell className="border-b">
              <BNText>আপনি</BNText> (apni)
            </TdCell>
            <TdCell className="border-b">
              <BNText>আপনারা</BNText> (apnara)
            </TdCell>
          </tr>
          <tr>
            <TdCell className="border-t" rowSpan={9}>
              3 (He/She/It)
            </TdCell>
            <TdCell className="border-t border-b border-b-gray-500" rowSpan={3}>
              Here
            </TdCell>
            <TdCell className="border-t">Familiar</TdCell>
            <TdCell className="border-t">
              <BNText>এ</BNText> (e)
            </TdCell>
            <TdCell className="border-t">
              <BNText>এরা</BNText> (era)
            </TdCell>
          </tr>
          <tr>
            <TdCell>Polite</TdCell>
            <TdCell>
              <BNText>ইনি</BNText> (ini)
            </TdCell>
            <TdCell>
              <BNText>এঁরা</BNText> (ẽra)
            </TdCell>
          </tr>
          <tr>
            <TdCell className="border-b border-gray-500">Inanimate</TdCell>
            <TdCell className="border-b border-gray-500">
              <BNText>এটা</BNText> (eta)
            </TdCell>
            <TdCell className="border-b border-gray-500">
              <BNText>এগুলো</BNText> (egulo)
            </TdCell>
          </tr>
          <tr>
            <TdCell className="border-t border-b border-gray-500" rowSpan={3}>
              There
            </TdCell>
            <TdCell className="border-t border-gray-500">Familiar</TdCell>
            <TdCell className="border-t border-gray-500">
              <BNText>ও</BNText> (o)
            </TdCell>
            <TdCell className="border-t border-gray-500">
              <BNText>ওরা</BNText> (ora)
            </TdCell>
          </tr>
          <tr>
            <TdCell>Polite</TdCell>
            <TdCell>
              <BNText>উনি</BNText> (uni)
            </TdCell>
            <TdCell>
              <BNText>ওঁরা</BNText> (õra)
            </TdCell>
          </tr>
          <tr>
            <TdCell className="border-b border-gray-500">Inanimate</TdCell>
            <TdCell className="border-b border-gray-500">
              <BNText>ওটা</BNText> (ota)
            </TdCell>
            <TdCell className="border-b border-gray-500">
              <BNText>ওগুলো</BNText> (ogulo)
            </TdCell>
          </tr>
          <tr>
            <TdCell className="border-t border-gray-500" rowSpan={3}>
              Elsewhere
            </TdCell>
            <TdCell className="border-t border-gray-500">Familiar</TdCell>
            <TdCell className="border-t border-gray-500">
              <BNText>সে</BNText> (she)
            </TdCell>
            <TdCell className="border-t border-gray-500">
              <BNText>তারা</BNText> (tara)
            </TdCell>
          </tr>
          <tr>
            <TdCell>Polite</TdCell>
            <TdCell>
              <BNText>তিনি</BNText> (tini)
            </TdCell>
            <TdCell>
              <BNText>তাঁরা</BNText> (tãra)
            </TdCell>
          </tr>
          <tr>
            <TdCell>Inanimate</TdCell>
            <TdCell>
              <BNText>সেটা</BNText> (sheta)
            </TdCell>
            <TdCell>
              <BNText>সেগুলো</BNText> (shegulo)
            </TdCell>
          </tr>
        </tbody>
      </table>
      <Text>
        Pronouns have a concept of &quot;honor&quot;, which are used to show
        respect.
        <br />
        The very familiar second-person pronouns can also be considered
        derogatory.
      </Text>
      <Text>
        Third-person pronouns also have a sense of proximity. You can refer to
        people or objects as being here (present in the discussion), there
        (nearby but not present), or elsewhere (not nearby).
      </Text>
    </Stack>
  );
}
