interface ICurrentCharacterProps {
  charachter: String;
}

export default function CurrentCharacter({
  charachter,
}: ICurrentCharacterProps) {
  return (
    <div>
      <div className="text-9xl text-center">{charachter.toUpperCase()}</div>
    </div>
  );
}
