import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Bloghead  from './Bloghead';
import Blogfooter  from './Blogfooter';

import '../styles/blog.css';

export default function Closures() {
    const [content, setContent] = useState("");
    const fileName = 'javascript-closures';

    useEffect(() => {
        // Markdown 파일을 읽어오는 fetch 호출
        fetch("./src/markdown/" + fileName+ ".md")
          .then((response) => response.text())
          .then((text) => setContent(text))
          .catch((error) => console.error("Markdown 파일 읽기 오류:", error));
    }, []);

     return (
        <>
          {
               <Bloghead />  
          }
           <div className="_title_1yfcl_7">
            <Link to="./">
                <font >
                <font >스크립트 클로저</font>
                </font>
            </Link>
            <Routes>
                <Route path="./" element={<getClosures />} />
            </Routes>
            </div>                
            <br/>
            <p>
                <font >2024년 7월 12일</font>
            </p>
            <br/>
            <div>
                 <ReactMarkdown remarkPlugins={remarkGfm}>
                   { content }
                 </ReactMarkdown>
            </div>

        { <Blogfooter text={"Closures"} /> }
        </>
    );
}
