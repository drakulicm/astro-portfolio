import React from "react";

type Props = {
  children: string;
};

const Title = (props: Props) => {
  return <h2 className="text-2xl leading-9 font-bold">{props.children}</h2>;
};

export default Title;
