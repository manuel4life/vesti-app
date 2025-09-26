import type { AppProps } from "next/app";
import "../styles/globals.css";
import Layout from "@/components/Layout";
import { CartProvider } from "@/context/CartContext";
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </CartProvider>
  );
}

export default MyApp;
