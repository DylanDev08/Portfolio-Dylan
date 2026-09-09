import { AppRouter } from "./AppRouter";
import { ErrorBoundary } from "../components/common/ErrorBoundary";
import { SeoManager } from "../components/common/SeoManager";

export function App() {
  return (
    <ErrorBoundary>
      <SeoManager />
      <AppRouter />
    </ErrorBoundary>
  );
}
