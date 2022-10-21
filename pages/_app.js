import "../styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import Layout from "components/layout/Layout";
import { Toaster } from "react-hot-toast";

// material rtl
import { CacheProvider } from "@emotion/react";
import Theme from "@/assets/js/CustomTheme";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import AuthProvider from "Context/AuthProvider";

function MyApp({ Component, pageProps }) {
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <AuthProvider>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={Theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Toaster />
        </ThemeProvider>
      </CacheProvider>
    </AuthProvider>
  );
}

export default MyApp;
