import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import '../assets/index-CibC6EYA.css';

export default function MarkdownForm() {
    const navigate = useNavigate();
    const [typeName, setTypeName] = useState('normal');

    const handleClick = (tname) => {
        setTypeName(tname);
        navigate("/PoketMonShop2", { state: { typeName: typeName } });
    }

    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" type="image/svg+xml" href="/favicon/favicon.png" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.cdnfonts.com/css/pokemon-solid" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&amp;display=swap" rel="stylesheet" />
            <link rel="icon" type="image/svg+xml" href="/vite.svg"></link>
            <title>블로그</title>
            <head>
                <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
                <script type="module" src="../assets/index-5bjW1xl.js"></script>
                <link rel="stylesheet" href="../assets/index-CibC6EYA.css" />
                <link type="text/css" rel="stylesheet" charset="UTF-8" href="https://www.gstatic.com/_/translate_http/_/ss/k=translate_http.tr.26tY-h6gH9w.L.W.O/am=gAE/d=0/rs=AN8SPfoGXBOIjDP5u9X-Fj08BKzEvbDeLg/m=el_main_css"></link>
            </head>

            <div className="wrapper">
                <h1 className="logo-Blog">블로그</h1><br /><br />
            </div>
        </>
    );
}
