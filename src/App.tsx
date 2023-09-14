import { HomePage } from "./pages/home-page";
import { BaseLayout } from "@/layouts/base-layout";

export function App() {
  return (
    <BaseLayout>
      <HomePage />
    </BaseLayout>
  );
}
