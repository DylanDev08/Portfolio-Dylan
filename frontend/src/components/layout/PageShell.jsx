import { Footer } from "./Footer";
import { Header } from "./Header";
import { usePortfolio } from "../../features/portfolio/hooks/usePortfolio";

export function PageShell({ children }) {
  const { data } = usePortfolio();

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer profile={data.profile} />
    </>
  );
}
