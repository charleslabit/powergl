import React from "react";
import Head from "next/head";
const PageTitle = ({ title }) => {
    return (
        <div>
            <Head>
                <title>GL Power | {title} </title>
                <meta name="keywords" content="GL Power"></meta>
            </Head>
        </div>
    );
};

export default PageTitle;
