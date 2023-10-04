import {lazy, Suspense, FC} from "react";

const Button = lazy(() => import("remote_react/Button"));

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
