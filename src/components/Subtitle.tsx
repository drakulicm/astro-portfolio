import React from "react";

type Props = {
  children: string;
};

const Subtitle = (props: Props) => {
  return (
    <div className="text-xs leading-4 text-subtitle">{props.children}</div>
  );
};

export default Subtitle;
