import "../styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "public/assets/js/customThem";
import Layout from "components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
