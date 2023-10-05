import { FC, useState } from "react";

const Button: FC = () => {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>Button {count}</button>;
};

export default Button;
