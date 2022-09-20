import React from "react";

type Props = {
  children: string;
};

const Title = (props: Props) => {
  return (
    <h2 className="text-2xl leading-9 font-bold text-center whitespace-nowrap lg:text-left">
      {props.children}
    </h2>
  );
};

export default Title;
