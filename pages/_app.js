import { UserProvider } from "../context";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Nav from "../components/nav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist//antd.css";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Head>
        <link rel="stylesheet" href="/css/styles.css" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>FYZBOOK</title>
      </Head>
      <Nav />
      <ToastContainer position="top-center" />
      <Component {...pageProps} /> 
    </UserProvider>
  );
}

export default MyApp;
