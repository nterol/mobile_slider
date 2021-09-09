import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect } from "react";

import s from "../../styles/Letter.module.css";
import Drawer from "../../components/drawer";

function genCharArray(charA, charZ) {
  var a = [],
    i = charA.charCodeAt(0),
    j = charZ.charCodeAt(0);
  for (; i <= j; ++i) {
    a.push(String.fromCharCode(i));
  }
  return a;
}

export const getStaticPaths = async () => {
  const letters = genCharArray("a", "z");
  return {
    fallback: true,
    paths: letters.map((letter) => `/letter/${letter}`),
  };
};

export const getStaticProps = async ({ params: { letter } }) => {
  return {
    props: {
      letter,
      prevLetter:
        letter !== "a"
          ? `/letter/${String.fromCharCode(letter.charCodeAt() - 1)}`
          : "/letter/z",
      nextLetter:
        letter !== "z"
          ? `/letter/${String.fromCharCode(letter.charCodeAt() + 1)}`
          : "/letter/a",
    },
  };
};

export default function LetterPage({ letter, nextLetter, prevLetter }) {
  const router = useRouter();

  useEffect(() => router.prefetch(nextLetter));

  return (
    <section className={s.container}>
      <Link href={prevLetter}>
        <a>&larr;</a>
      </Link>
      <h1 className={s.letter}>{letter.toUpperCase()}</h1>
      <Link href={nextLetter}>
        <a>&rarr;</a>
      </Link>
      <Drawer />
    </section>
  );
}
