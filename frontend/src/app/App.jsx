import { AppRouter } from "./AppRouter";
import { ErrorBoundary } from "../components/common/ErrorBoundary";
import { SeoManager } from "../components/common/SeoManager";
import { ScrollToTop } from "../components/common/ScrollToTop";

export function App() {
  return (
    <ErrorBoundary>
      <ScrollToTop />
      <SeoManager />
      <AppRouter />
    </ErrorBoundary>
  );
}
