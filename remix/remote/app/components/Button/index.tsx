import { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);

  return (
    <button className="button" onClick={() => setCount(count + 1)}>
      count is {count}
    </button>
  );
};

export default Button;
