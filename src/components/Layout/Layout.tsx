import { type NextPage } from "next";
import { Navbar } from "../Navbar";

interface LayoutComponent {
  children: React.ReactNode;
}

const Layout: NextPage<LayoutComponent> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <footer>
        <header>
          <h2>footer</h2>
        </header>
      </footer>
    </>
  );
};

export { Layout };
