import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const Section = (props: Props) => {
  return (
    <section className={`mt-40 ${props.className}`}>{props.children}</section>
  );
};

export default Section;
