import "../styles/globals.scss";
import "antd/dist/antd.css";
import MainPage from "../src/Components/Layout/MainPage/MainPage";

function MyApp({ Component, pageProps }) {
    return <MainPage Component={Component} pageProps={pageProps} />;
}

export default MyApp;
