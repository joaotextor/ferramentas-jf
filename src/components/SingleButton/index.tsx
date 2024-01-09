import Image from "next/image";
import styles from "./SingleButton.module.css";
import Link from "next/link";

type Props = {
  href: string;
  imgSrc: string;
  caption: string;
  svgFilterCode?: string;
  target?: string;
};

const SingleButton: React.FC<Props> = ({
  href,
  imgSrc,
  caption,
  svgFilterCode,
  target,
  ...props
}): JSX.Element => {
  return (
    <Link href={href} target={target ?? "_blank"}>
      <div
        className={`flex items-center gap-1 w-fit rounded-md px-2 py-1 ${styles.buttonCss}`}
      >
        <div>
          <Image
            height={25}
            alt="download icon"
            src={imgSrc}
            style={{ filter: svgFilterCode }}
          />
        </div>
        <span className="text-primary-dark font-medium">{caption}</span>
      </div>
    </Link>
  );
};

export default SingleButton;
