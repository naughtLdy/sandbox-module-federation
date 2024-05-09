import {Suspense, FC} from "react";
import Button from "remote_react/Button";

const App: FC = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <Suspense fallback={<span>Loading...</span>}>
        <Button />
      </Suspense>
    </div>
  );
}

export default App;
