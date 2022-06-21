import Head from "next/head";
import Navbar from "@/components/Navbar";

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
}

function Layout({ title, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Navbar />

      <main>{children}</main>
    </>
  );
}

export default Layout;
