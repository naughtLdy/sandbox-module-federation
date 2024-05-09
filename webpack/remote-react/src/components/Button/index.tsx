import { FC, useState } from "react";

type Props = {};

const Button: FC<Props> = () => {
  const [count, setCount] = useState(0);

  const click = () => {
    setCount(count + 1);
  };

  return <button onClick={click}>Button {count}</button>;
};

export default Button;
