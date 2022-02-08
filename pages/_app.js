import "../styles/globals.scss";
import "antd/dist/antd.css";
import MainLayout from "../src/Components/Layout/MainLayout/MainLayout";
function MyApp({ Component, pageProps }) {
    return <MainLayout Component={Component} pageProps={pageProps} />;
}

export default MyApp;
