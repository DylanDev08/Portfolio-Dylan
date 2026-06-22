import { AppRouter } from "./AppRouter";
import { ErrorBoundary } from "../components/common/ErrorBoundary";

export function App() {
  return (
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  );
}
