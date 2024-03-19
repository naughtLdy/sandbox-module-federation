import { lazy } from "react";
import { ClientOnly } from "./ClientOnly";

// remote_remix
// import Button from "remote_remix/Button";
const Button = lazy(() => import("remote_remix/Button?url"));

export function FederationButton() {
  return (
    <ClientOnly fallback={<div>loading...</div>}>{() => <Button />}</ClientOnly>
  );
}
