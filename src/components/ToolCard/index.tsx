import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ImgHTMLAttributes } from "react";

type Props = {
  title: string;
  description: string;
  imageUrl?: string | StaticImport;
  buttons?: React.ReactNode;
};

const ToolCard: React.FC<Props> = ({
  title,
  description,
  imageUrl,
  buttons,
  ...props
}) => {
  return (
    <div className="my-3 text-center max-w-md w-fit h-fit rounded-3xl border-2 p-3 leading-none bg-gradient-to-b from-sky-950 to-primary-dark shadow-lg shadow-slate-500">
      <h1 className="mb-4">{title}</h1>
      <div className="mb-3 flex justify-center">
        <Image src={imageUrl!} alt={title} height={250} />
      </div>
      <span className="text-base leading-normal">{description}</span>
      <div className="flex gap-2 pt-5 justify-center">{buttons}</div>
    </div>
  );
};

export default ToolCard;
