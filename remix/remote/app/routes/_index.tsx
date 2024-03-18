import type { MetaFunction } from "@remix-run/node";
import Button from "~/components/Button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Remix - Remote</h1>
      <div>
        <Button />
      </div>
    </div>
  );
}
