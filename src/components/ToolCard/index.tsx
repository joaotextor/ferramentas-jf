import Image from "next/image";

type Props = {
  title: string;
  description: string;
  buttons?: React.ReactNode;
};

const ToolCard: React.FC<Props> = ({
  title,
  description,
  buttons,
  ...props
}) => {
  return (
    <div className="my-3 text-center max-w-md w-fit rounded-3xl border-primary-light border-2 p-3 leading-none">
      <h1 className="mb-4">{title}</h1>
      <span className="text-base leading-normal">{description}</span>
      <div className="flex gap-2 pt-5 justify-center">{buttons}</div>
    </div>
  );
};

export default ToolCard;
