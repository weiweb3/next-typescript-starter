import type { AppProps } from "next/app";
import { ChainId, Weiweb3Provider } from "@weiweb3/react";
import "../styles/globals.css";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Weiweb3Provider desiredChainId={activeChainId}>
      <Component {...pageProps} />
    </Weiweb3Provider>
  );
}

export default MyApp;
