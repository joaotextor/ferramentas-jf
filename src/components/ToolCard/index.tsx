import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ImgHTMLAttributes } from "react";

type Props = {
  title: string;
  description: string;
  imageUrl?: string | StaticImport;
  imageWidth?: number;
  imageHeight?: number;
  className?: string;
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
  className,
  showAlert = false,
  alertMessage,
  ...props
}) => {
  return (
    <div
      className="group mt-4 flex flex-col items-start h-fit max-md:w-full rounded-xl border border-[rgba(96,165,250,0.12)] border-l-4 border-l-jf-border-soft p-6 leading-none bg-[rgba(20,43,77,0.45)] backdrop-blur-md transition-all duration-300 hover:bg-[rgba(20,43,77,0.6)] hover:border-jf-primary-hover hover:border-l-jf-primary hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.4),0_0_0_1px_rgba(147,197,253,0.18),0_0_32px_-4px_rgba(96,165,250,0.45),0_0_64px_-8px_rgba(59,130,246,0.3)]"
    >
      <h2 className="mb-4 max-md:text-center font-serif italic text-jf-ink text-2xl">
        {title}
      </h2>
      <div className="mb-3 flex max-md:flex-col max-md:items-center">
        <Image
          className={`${className ?? ""}`}
          src={imageUrl!}
          alt={title}
          height={imageHeight}
          width={imageWidth}
          objectFit="cover"
        />
        <div className="text-base leading-normal text-justify px-4 max-md:text-center max-md:flex max-md:flex-col max-md:items-center">
          <span className="text-jf-text">{description}</span>
          <div className="flex gap-2 pt-5 flex-wrap">{buttons}</div>
          <div
            className="text-jf-accent text-sm leading-normal pt-2"
            hidden={!showAlert}
          >
            {alertMessage}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;