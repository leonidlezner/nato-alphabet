import { useEffect, useRef, useState } from "react";
import CurrentCharacter from "./CurrentCharacter";
import CurrentCode from "./CurrentCode";

interface IMainContainerProps {}

const alphabet: Array<string> = "abcdefghijklmnopqrstuvwxyz".split("");

const natoAlphabet: { [key: string]: string } = {
  a: "Alpha",
  b: "Bravo",
  c: "Charlie",
  d: "Delta",
  e: "Echo",
  f: "Foxtrot",
  g: "Golf",
  h: "Hotel",
  i: "India",
  j: "Juliett",
  k: "Kilo",
  l: "Lima",
  m: "Mike",
  n: "November",
  o: "Oscar",
  p: "Papa",
  q: "Quebec",
  r: "Romeo",
  s: "Sierra",
  t: "Tango",
  u: "Uniform",
  v: "Victor",
  w: "Whiskey",
  x: "X-ray",
  y: "Yankee",
  z: "Zulu",
};

export default function MainContainer({}: IMainContainerProps) {
  const currentCharIndex = useRef<number>(0);
  const [character, setCharacter] = useState<string>(
    alphabet[currentCharIndex.current],
  );
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const triggerNext = () => {
      setIsVisible((oldIsVisible: boolean) => {
        if (oldIsVisible) {
          currentCharIndex.current = Math.floor(
            Math.random() * (alphabet.length - 1),
          );
          setCharacter(alphabet[currentCharIndex.current]);
          return false;
        } else {
          return true;
        }
      });
    };

    window.document.addEventListener("mousedown", triggerNext);

    return () => {
      window.document.removeEventListener("mousedown", triggerNext);
    };
  }, []);

  return (
    <div className="cursor-pointer h-full flex flex-col justify-center items-center">
      <div>
        <CurrentCharacter charachter={character} />
        <CurrentCode code={natoAlphabet[character]} visible={isVisible} />
      </div>
    </div>
  );
}
