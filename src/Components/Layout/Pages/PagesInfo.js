import React from "react";
import { Image } from "antd";
import style from "./pages.module.scss";

const PagesInfo = ({ url, text }) => {
    return (
        <div>
            <Image src={url} alt="Report" preview={false} className={style.small_image} />
            <span className={`white-color ${style.card_text}`}>{text} </span>
            <Image className={style.big_image} src={url} alt="Report" preview={false} />
        </div>
    );
};

export default PagesInfo;
