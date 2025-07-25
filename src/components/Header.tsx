import type { ReactNode } from "react";

type HeaderProps = {
  image: { src: string; alt: string };
  children?: ReactNode;
};

function Header(props: HeaderProps) {
  return (
    <header className="header">
      <img src={props.image.src} alt={props.image.alt} />
      {props.children && props.children}
    </header>
  );
}

export default Header;
