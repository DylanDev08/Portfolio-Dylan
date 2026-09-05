import { Footer } from "./Footer";
import { Header } from "./Header";
import { usePortfolio } from "../../features/portfolio/hooks/usePortfolio";

export function PageShell({ children }) {
  const { data } = usePortfolio();

  return (
    <>
      <a className="skip-link" href="#main-content">Saltar al contenido</a>
      <Header />
      <main id="main-content">{children}</main>
      <Footer profile={data.profile} />
    </>
  );
}
