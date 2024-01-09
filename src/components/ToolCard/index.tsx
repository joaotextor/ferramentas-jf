import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ImgHTMLAttributes } from "react";

type Props = {
  title: string;
  description: string;
  imageUrl?: string | StaticImport;
  imageWidth?: number;
  imageHeight?: number;
  buttons?: React.ReactNode;
  showAlert?: boolean;
  alertMessage?: string;
};

const ToolCard: React.FC<Props> = ({
  title,
  description,
  imageUrl,
  imageWidth,
  imageHeight,
  buttons,
  showAlert = false,
  alertMessage,
  ...props
}) => {
  return (
    <div className="mt-1 flex flex-col items-start h-fit max-md:w-full rounded-3xl border-2 p-3 leading-none bg-gradient-to-b from-sky-950 to-primary-dark shadow-lg shadow-slate-500">
      <h1 className="mb-4">{title}</h1>
      <div className="mb-3 flex max-md:flex-col max-md:items-center">
        <Image
          src={imageUrl!}
          alt={title}
          height={imageHeight}
          width={imageWidth}
        />
        <div className="text-base leading-normal text-justify px-4 max-md:text-center max-md:flex max-md:flex-col max-md:items-center">
          <span>{description}</span>
          <div className="flex gap-2 pt-5">{buttons}</div>
          <div className="text-base leading-normal pt-2" hidden={!showAlert}>
            {alertMessage}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
