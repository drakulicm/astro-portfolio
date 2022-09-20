import type { ReactNode } from "react";
import { useOnScreen } from "../hooks/useOnScreen";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
};

const Section = (props: Props) => {
  return (
    <section id={props.id || ""} className={`mt-40 px-3 ${props.className}`}>
      {props.children}
    </section>
  );
};

export default Section;
