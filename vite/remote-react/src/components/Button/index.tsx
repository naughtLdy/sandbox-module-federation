import ReactDOM from "react-dom";
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

const mount = (el: HTMLElement) => {
  ReactDOM.render(<Button />, el);
};

export default Button;

export { Button, mount };
