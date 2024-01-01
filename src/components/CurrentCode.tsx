interface ICurrentCodeProps {
  code: String;
  visible: boolean;
}

export default function CurrentCode({ code, visible }: ICurrentCodeProps) {
  return (
    <div>
      <div className="mt-4 text-xl text-center">{visible ? code : "*****"}</div>
    </div>
  );
}
