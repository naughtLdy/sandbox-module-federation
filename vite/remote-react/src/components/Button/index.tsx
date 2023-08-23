import "./index.css";
import useCount from "../store";

const Button = () => {
  const [count, setCount] = useCount();

  return (
    <button className="button" onClick={() => setCount(count + 1)}>
      count is {count}
    </button>
  );
};

export default Button;
