import { ReactNode } from "react";
import BNText from "./components/BNText";
import { Text } from "@mantine/core";
import Link from "next/link";

export interface LetterData {
  pageNumber: number;
  letter: string;
  fullName: ReactNode;
  vowelMark?: string;
  pronunciation: ReactNode;
  pronunciationFile: string;
  type: string;
  notes?: ReactNode;
}

export const vowels: LetterData[][] = [
  [
    {
      pageNumber: 1,
      letter: "অ",
      fullName: (
        <>
          <BNText>স্বর অ</BNText> (shôrô ô)
        </>
      ),
      vowelMark: "N/A",
      pronunciation: "ɔ",
      pronunciationFile: "/audio/letter/1.mp3",
      type: "Vowel",
      notes: (
        <>
          <Text>
            This vowel is the &quot;default&quot; vowel sound in Bengali.
          </Text>
          <Text>
            This means that an unmarked consonant uses this vowel sound.
          </Text>
        </>
      ),
    },
    {
      pageNumber: 2,
      letter: "আ",
      fullName: (
        <>
          <BNText>স্বর আ</BNText> (shôrô a)
        </>
      ),
      vowelMark: "া",
      pronunciation: "a",
      pronunciationFile: "/audio/letter/2.mp3",
      type: "Vowel",
    },
    {
      pageNumber: 3,
      letter: "ই",
      fullName: (
        <>
          <BNText>হ্রস্ব ই</BNText> (rôshshô i)
        </>
      ),
      vowelMark: "ি",
      pronunciation: "i",
      pronunciationFile: "/audio/letter/3.mp3",
      type: "Vowel",
      notes: (
        <>
          <Text>
            This has the same pronunciation as the letter{" "}
            <Link href="/letter/4">
              <BNText>ঈ</BNText>
            </Link>
            .
          </Text>
          <Text>
            In Sanskrit, <BNText>ই</BNText> had a short i sound, while{" "}
            <BNText>ঈ</BNText> had a long i sound.
          </Text>
          <Text>
            While this distinction does not exist in Bengali, the letters are
            separate for etymological purposes.
          </Text>
        </>
      ),
    },
    {
      pageNumber: 4,
      letter: "ঈ",
      fullName: (
        <>
          <BNText>দীর্ঘ ঈ</BNText> (dirghô ī)
        </>
      ),
      vowelMark: "ী",
      pronunciation: "i",
      pronunciationFile: "/audio/letter/4.mp3",
      type: "Vowel",
      notes: (
        <>
          <Text>
            This has the same pronunciation as the letter{" "}
            <Link href="/letter/3">
              <BNText>ই</BNText>
            </Link>
            .
          </Text>
          <Text>
            In Sanskrit, <BNText>ই</BNText> had a short i sound, while{" "}
            <BNText>ঈ</BNText> had a long i sound.
          </Text>
          <Text>
            While this distinction does not exist in Bengali, the letters are
            separate for etymological purposes.
          </Text>
        </>
      ),
    },
    {
      pageNumber: 5,
      letter: "উ",
      fullName: (
        <>
          <BNText>হ্রস্ব উ</BNText> (rôshshô u)
        </>
      ),
      vowelMark: "ু",
      pronunciation: "u",
      pronunciationFile: "/audio/letter/5.mp3",
      type: "Vowel",
      notes: (
        <>
          <Text>
            This has the same pronunciation as the letter{" "}
            <Link href="/letter/6">
              <BNText>ঊ</BNText>
            </Link>
            .
          </Text>
          <Text>
            In Sanskrit, <BNText>উ</BNText> had a short u sound, while{" "}
            <BNText>ঊ</BNText> had a long u sound.
          </Text>
          <Text>
            While this distinction does not exist in Bengali, the letters are
            separate for etymological purposes.
          </Text>
        </>
      ),
    },
    {
      pageNumber: 6,
      letter: "উ",
      fullName: (
        <>
          <BNText>দীর্ঘ উ</BNText> (dirghô ū)
        </>
      ),
      vowelMark: "ূ",
      pronunciation: "u",
      pronunciationFile: "/audio/letter/6.mp3",
      type: "Vowel",
      notes: (
        <>
          <Text>
            This has the same pronunciation as the letter{" "}
            <Link href="/letter/5">
              <BNText>উ</BNText>
            </Link>
            .
          </Text>
          <Text>
            In Sanskrit, <BNText>উ</BNText> had a short u sound, while{" "}
            <BNText>ঊ</BNText> had a long u sound.
          </Text>
          <Text>
            While this distinction does not exist in Bengali, the letters are
            separate for etymological purposes.
          </Text>
        </>
      ),
    },
  ],
  [
    {
      pageNumber: 7,
      letter: "ঋ",
      fullName: <BNText>ঋ</BNText>,
      vowelMark: "ৃ",
      pronunciation: "ri",
      pronunciationFile: "/audio/letter/7.mp3",
      type: "Vowel",
      notes: (
        <Text>
          Despite containing an r sound, <BNText>ঋ</BNText> is considered a
          vowel.
        </Text>
      ),
    },
    {
      pageNumber: 8,
      letter: "এ",
      fullName: <BNText>এ</BNText>,
      vowelMark: "ে",
      pronunciation: "e, æ, or ɛ",
      pronunciationFile: "/audio/letter/8.mp3",
      type: "Vowel",
    },
    {
      pageNumber: 9,
      letter: "ঐ",
      fullName: <BNText>ঐ</BNText>,
      vowelMark: "ৈ",
      pronunciation: "oi",
      pronunciationFile: "/audio/letter/9.mp3",
      type: "Vowel",
    },
    {
      pageNumber: 10,
      letter: "ও",
      fullName: <BNText>ও</BNText>,
      vowelMark: "ো",
      pronunciation: "o",
      pronunciationFile: "/audio/letter/10.mp3",
      type: "Vowel",
    },
    {
      pageNumber: 11,
      letter: "ঔ",
      fullName: <BNText>ঔ</BNText>,
      vowelMark: "ৌ",
      pronunciation: "ou",
      pronunciationFile: "/audio/letter/11.mp3",
      type: "Vowel",
    },
  ],
];

export const consonants: LetterData[][] = [
  [
    {
      pageNumber: 12,
      letter: "ক",
      fullName: <BNText>ক</BNText>,
      pronunciation: "kɔ",
      pronunciationFile: "/audio/letter/12.mp3",
      type: "Consonant",
    },
    {
      pageNumber: 13,
      letter: "খ",
      fullName: <BNText>খ</BNText>,
      pronunciation: "kʱɔ",
      pronunciationFile: "/audio/letter/13.mp3",
      type: "Consonant",
    },
    {
      pageNumber: 14,
      letter: "গ",
      fullName: <BNText>গ</BNText>,
      pronunciation: "ɡɔ",
      pronunciationFile: "/audio/letter/14.mp3",
      type: "Consonant",
    },
    {
      pageNumber: 15,
      letter: "ঘ",
      fullName: <BNText>ঘ</BNText>,
      pronunciation: "gʱɔ",
      pronunciationFile: "/audio/letter/15.mp3",
      type: "Consonant",
    },
    {
      pageNumber: 16,
      letter: "ঙ",
      fullName: <BNText>ঙ</BNText>,
      pronunciation: "ŋɔ",
      pronunciationFile: "/audio/letter/16.mp3",
      type: "Consonant",
    },
  ],
  [
    {
      pageNumber: 17,
      letter: "চ",
      fullName: <BNText>চ</BNText>,
      pronunciation: "tʃɔ",
      pronunciationFile: "/audio/letter/17.mp3",
      type: "Consonant",
    },
    {
      pageNumber: 18,
      letter: "ছ",
      fullName: <BNText>ছ</BNText>,
      pronunciation: "tʃʱɔ",
      pronunciationFile: "/audio/letter/18.mp3",
      type: "Consonant",
    },
    {
      pageNumber: 19,
      letter: "জ",
      fullName: (
        <>
          <BNText>বর্গীয় জ</BNText> (bôrgiyô jô)
        </>
      ),
      pronunciation: "dʒɔ",
      pronunciationFile: "/audio/letter/19.mp3",
      type: "Consonant",
    },
    {
      pageNumber: 20,
      letter: "ঝ",
      fullName: <BNText>ঝ</BNText>,
      pronunciation: "dʒʱɔ",
      pronunciationFile: "/audio/letter/20.mp3",
      type: "Consonant",
    },
    {
      pageNumber: 21,
      letter: "ঞ",
      fullName: <BNText>ঞ</BNText>,
      pronunciation: "nɔ",
      pronunciationFile: "/audio/letter/21.mp3",
      type: "Consonant",
    },
  ],
  [
    {
      pageNumber: 22,
      letter: "ট",
      fullName: <BNText>ট</BNText>,
      pronunciation: "ʈɔ",
      pronunciationFile: "/audio/letter/22.mp3",
      type: "Consonant",
      notes: (
        <>
          <Text>
            This letter sounds similar to{" "}
            <Link href="/letter/27">
              <BNText>ত</BNText>
            </Link>
            .
          </Text>
          <Text>
            Pronounce this letter by pressing your tongue to the roof of your
            mouth.
          </Text>
        </>
      ),
    },
    {
      pageNumber: 23,
      letter: "ঠ",
      fullName: <BNText>ঠ</BNText>,
      pronunciation: "ʈʰɔ",
      pronunciationFile: "/audio/letter/23.mp3",
      type: "Consonant",
      notes: (
        <>
          <Text>
            This letter sounds similar to{" "}
            <Link href="/letter/28">
              <BNText>থ</BNText>
            </Link>
            .
          </Text>
          <Text>
            Pronounce this letter by pressing your tongue to the roof of your
            mouth.
          </Text>
        </>
      ),
    },
    {
      pageNumber: 24,
      letter: "ড",
      fullName: <BNText>ড</BNText>,
      pronunciation: "ɖɔ",
      pronunciationFile: "/audio/letter/24.mp3",
      type: "Consonant",
      notes: (
        <>
          <Text>
            This letter sounds similar to{" "}
            <Link href="/letter/29">
              <BNText>দ</BNText>
            </Link>
            .
          </Text>
          <Text>
            Pronounce this letter by pressing your tongue to the roof of your
            mouth.
          </Text>
        </>
      ),
    },
    {
      pageNumber: 25,
      letter: "ঢ",
      fullName: <BNText>ঢ</BNText>,
      pronunciation: "ɖʱɔ",
      pronunciationFile: "/audio/letter/25.mp3",
      type: "Consonant",
      notes: (
        <>
          <Text>
            This letter sounds similar to{" "}
            <Link href="/letter/30">
              <BNText>ধ</BNText>
            </Link>
            .
          </Text>
          <Text>
            Pronounce this letter by pressing your tongue to the roof of your
            mouth.
          </Text>
        </>
      ),
    },
    {
      pageNumber: 26,
      letter: "ণ",
      fullName: <BNText>ণ</BNText>,
      pronunciation: "nɔ",
      pronunciationFile: "/audio/letter/26.mp3",
      type: "Consonant",
    },
  ],
  [
    {
      pageNumber: 27,
      letter: "ত",
      fullName: <BNText>ত</BNText>,
      pronunciation: "t̪ɔ",
      pronunciationFile: "/audio/letter/27.mp3",
      type: "Consonant",
      notes: (
        <>
          <Text>
            This letter sounds similar to{" "}
            <Link href="/letter/22">
              <BNText>ট</BNText>
            </Link>
            .
          </Text>
          <Text>
            Pronounce this letter by pressing your tongue to the bottom of your
            teeth.
          </Text>
        </>
      ),
    },
    {
      pageNumber: 28,
      letter: "থ",
      fullName: <BNText>থ</BNText>,
      pronunciation: "t̪ʰɔ",
      pronunciationFile: "/audio/letter/28.mp3",
      type: "Consonant",
      notes: (
        <>
          <Text>
            This letter sounds similar to{" "}
            <Link href="/letter/23">
              <BNText>ঠ</BNText>
            </Link>
            .
          </Text>
          <Text>
            Pronounce this letter by pressing your tongue to the bottom of your
            teeth.
          </Text>
        </>
      ),
    },
    {
      pageNumber: 29,
      letter: "দ",
      fullName: <BNText>দ</BNText>,
      pronunciation: "d̪ɔ",
      pronunciationFile: "/audio/letter/29.mp3",
      type: "Consonant",
      notes: (
        <>
          <Text>
            This letter sounds similar to{" "}
            <Link href="/letter/24">
              <BNText>ড</BNText>
            </Link>
            .
          </Text>
          <Text>
            Pronounce this letter by pressing your tongue to the bottom of your
            teeth.
          </Text>
        </>
      ),
    },
    {
      pageNumber: 30,
      letter: "ধ",
      fullName: <BNText>ধ</BNText>,
      pronunciation: "d̪ʱɔ",
      pronunciationFile: "/audio/letter/30.mp3",
      type: "Consonant",
      notes: (
        <>
          <Text>
            This letter sounds similar to{" "}
            <Link href="/letter/25">
              <BNText>ঢ</BNText>
            </Link>
            .
          </Text>
          <Text>
            Pronounce this letter by pressing your tongue to the bottom of your
            teeth.
          </Text>
        </>
      ),
    },
    {
      pageNumber: 31,
      letter: "ন",
      fullName: <BNText>ন</BNText>,
      pronunciation: "nɔ",
      pronunciationFile: "/audio/letter/31.mp3",
      type: "Consonant",
    },
  ],
  [
    {
      pageNumber: 32,
      letter: "প",
      fullName: <BNText>প</BNText>,
      pronunciation: "pɔ",
      pronunciationFile: "/audio/letter/32.mp3",
      type: "Consonant",
    },
    {
      pageNumber: 33,
      letter: "ফ",
      fullName: <BNText>ফ</BNText>,
      pronunciation: "pʰɔ",
      pronunciationFile: "/audio/letter/33.mp3",
      type: "Consonant",
    },
    {
      pageNumber: 34,
      letter: "ব",
      fullName: <BNText>ব</BNText>,
      pronunciation: "bɔ",
      pronunciationFile: "/audio/letter/34.mp3",
      type: "Consonant",
    },
    {
      pageNumber: 35,
      letter: "ভ",
      fullName: <BNText>ভ</BNText>,
      pronunciation: "bʱɔ",
      pronunciationFile: "/audio/letter/35.mp3",
      type: "Consonant",
    },
    {
      pageNumber: 36,
      letter: "ম",
      fullName: <BNText>ম</BNText>,
      pronunciation: "mɔ",
      pronunciationFile: "/audio/letter/36.mp3",
      type: "Consonant",
    },
  ],
  [
    {
      pageNumber: 37,
      letter: "য",
      fullName: (
        <>
          <BNText>অন্তঃস্থ য</BNText> (ôntôsthô jô)
        </>
      ),
      pronunciation: "dʒɔ",
      pronunciationFile: "/audio/letter/37.mp3",
      type: "Consonant",
    },
    {
      pageNumber: 38,
      letter: "র",
      fullName: <BNText>র</BNText>,
      pronunciation: "rɔ",
      pronunciationFile: "/audio/letter/38.mp3",
      type: "Consonant",
    },
    {
      pageNumber: 39,
      letter: "ল",
      fullName: <BNText>ল</BNText>,
      pronunciation: "lɔ",
      pronunciationFile: "/audio/letter/39.mp3",
      type: "Consonant",
    },
  ],
  [
    {
      pageNumber: 40,
      letter: "শ",
      fullName: <BNText>শ</BNText>,
      pronunciation: "ʃɔ",
      pronunciationFile: "/audio/letter/40.mp3",
      type: "Consonant",
    },
    {
      pageNumber: 41,
      letter: "ষ",
      fullName: <BNText>ষ</BNText>,
      pronunciation: "ɕɔ",
      pronunciationFile: "/audio/letter/41.mp3",
      type: "Consonant",
    },
    {
      pageNumber: 42,
      letter: "স",
      fullName: <BNText>স</BNText>,
      pronunciation: "sɔ",
      pronunciationFile: "/audio/letter/42.mp3",
      type: "Consonant",
    },
    {
      pageNumber: 43,
      letter: "হ",
      fullName: <BNText>হ</BNText>,
      pronunciation: "ɦɔ",
      pronunciationFile: "/audio/letter/43.mp3",
      type: "Consonant",
    },
  ],
  [
    {
      pageNumber: 44,
      letter: "ড়",
      fullName: <BNText>ড়</BNText>,
      pronunciation: "ɽɔ",
      pronunciationFile: "/audio/letter/44.mp3",
      type: "Consonant",
    },
    {
      pageNumber: 45,
      letter: "ঢ়",
      fullName: <BNText>ঢ়</BNText>,
      pronunciation: "ɽʱɔ",
      pronunciationFile: "/audio/letter/45.mp3",
      type: "Consonant",
    },
    {
      pageNumber: 46,
      letter: "য়",
      fullName: <BNText>য়</BNText>,
      pronunciation: "e̯ɔ",
      pronunciationFile: "/audio/letter/46.mp3",
      type: "Consonant",
    },
  ],
];

const flatVowels = vowels.flat();
const flatConsonants = consonants.flat();

export const alphabet = flatVowels.concat(flatConsonants);
