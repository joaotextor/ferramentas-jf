import Image from "next/image";
import styles from "./SingleButton.module.css";
import Link from "next/link";

type Props = {
  href: string;
  imgSrc?: string;
  caption: string;
  svgFilterCode?: string;
  target?: string;
  className?: string;
};

const SingleButton: React.FC<Props> = ({
  href,
  imgSrc,
  caption,
  svgFilterCode,
  target,
  className,
  ...props
}): JSX.Element => {
  return (
    <Link
      href={href}
      target={target ?? "_blank"}
      className={`${styles.btn} ${className ?? ""}`}
    >
      <span className={styles.btnCaption}>{caption}</span>
      {imgSrc && (
        <Image
          className={styles.btnIcon}
          height={18}
          width={18}
          alt=""
          src={imgSrc}
          style={{ filter: svgFilterCode }}
        />
      )}
    </Link>
  );
};

export default SingleButton;