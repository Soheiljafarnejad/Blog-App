import "../styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import Layout from "components/layout/Layout";

// material rtl
import { CacheProvider } from "@emotion/react";
import Theme from "@/assets/js/CustomTheme";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

function MyApp({ Component, pageProps }) {
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={Theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default MyApp;
