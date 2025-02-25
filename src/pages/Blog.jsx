import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Routes, Route, Link, useParams, useSearchParams } from "react-router-dom";
import getGpt from '../components/Gpt';
import getClosures from '../components/Closures';
import getModuloOp from '../components/ModuloOp';
import Blogfooter from '../components/Blogfooter';
import Bloghead from '../components/Blogfooter';
import CommentScript from '../components/CommentScript';
import '../styles/blog.css';
import '../images/sparta.png';

//import rehypeRaw from "rehype-raw"; // HTML 파싱
//import rehypeHighlight from "rehype-highlight"; // 코드 하이라이트

export default function Blog() {
  const [count, setCount] = useState(0);
  
  //const navigate = useNavigate();

  return (
    <>        
        <div id="root">
          <div>
            <div className="_wrapper_1bsna_1">
              <a className="_wrapper_ye7lh_1" href="/">
              <font>
                <font >코딩 클럽 블로그스파르타</font>
              </font>
              </a>
          </div>
          <div>
            <div className="_wrapper_dd5jh_1">
              <h1>
                <font >
                  <font >👋 안녕하세요, x 개발자 x 입니다.</font>
                </font>
                </h1><br/>
                <img src="./src/images/sparta.png" style={{width:300, height:200}} />
                <h2 className="_mainHeading_dd5jh_11">
                  <font >
                    <font >최근 올라온 글:</font>
                  </font>
                </h2>
                <div className="_wrapper_1yfcl_1">
                <div className="_title_1yfcl_7">
                    <Link to="./Closures">
                       <font >
                        <font>스크립트 클로저</font>
                      </font>
                    </Link>
                    <Routes>
                      <Route path="./Closures" element={<getClosures />} />
                    </Routes>
                 </div>                
                <br/>
                  <p>
                    <font >2024년 7월 12일</font>
                  </p><br/>
                <p>
                  <font >
                    <font >인공지능과 의사소통을 위해 효과적인 주체 작성 방법을 알아보세요.
                    </font>
                  </font> 
                </p>
                <div className="_continueReadingLink_1yfcl_33">
                <Link to="./Closures">
                  <font >
                    <font >블로그 내용 읽기</font>
                  </font>
                  <span className="_arrow_1yfcl_27">
                    <font >
                      <font >→</font>
                    </font>
                  </span>
                </Link>
              </div>
            </div>
            <div className="_wrapper_1yfcl_1">
             <div className="_title_1yfcl_7">
              <Link to="./ModuloOp">
              <font>
                <font >반대 모듈로 대체</font>
              </font>
              </Link>
              <Routes>
                <Route path="./ModuloOp" element={<getModuloOp />} />
              </Routes>
              </div>
              <br/>
              <p><font >2024년 7월 13일</font></p><br/>
              <p>
                <font >
                  <font >ES6(ECMAScript 2015)는 스위치에 많은 새로운 기능과 로고를 추가했습니다. 그 부분의 배열을 사용하여 코드를 더 간단하고 쉽게 정리할 수 있습니다. 이 글에서는 ES6의 배열을 정리하는 몇 가지 주요 내용을 살펴보겠습니다.</font></font> </p><a className="_continueReadingLink_1yfcl_33" href="/javascript-modulo-operator.md">
                  <Link to="./ModuloOp">
                  <font >
                    <font >블로그 내용 읽기</font>
                  </font>
                  <span className="_arrow_1yfcl_27">
                    <font >
                      <font >→</font>
                    </font>
                  </span>
                  </Link>
                </a>
              </div>
              <div className="_wrapper_1yfcl_1">
                <div className="_title_1yfcl_7">
                <Link to="./gpt">
                    <font>
                      <font>리액트와 CSS</font>g
                    </font>
                </Link>
                </div>
                <p><br/>
                  <font >2024년 7월 14일</font><br/>
                </p> <br/>
                <p>
                  <font >몇 가지 함께 인공지능(AI)과 자연어 처리(NLP)가 가능하도록 발전할 수 있었습니다. 그 중심에는 OpenAI의 GPT-3와 같은 프로세서 언어 모델이 있습니다. 이러한 모델은 개발자들의 일상적인 업무와 개발을 혁신적으로 보여줍니다. 이 글에서는 GPT 시대에 개발자들이 떠오르는 것과 미래의 전망에 대해 살펴보겠습니다.</font>
                </p>
                <div className="_continueReadingLink_1yfcl_33">
                  <Link to="./gpt">
                    <font>
                      <font>블로그 내용 읽기</font>
                    </font>
                    <span className="_arrow_1yfcl_27">
                      <font>
                        <font >→</font>
                      </font>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="_wrapper_hqji1_1">
            <div className="_content_hqji1_8">
              <div>
                <a className="_wrapper_ye7lh_1" href="/">
                <font >
                  <font >스파르타 코딩 클럽 블로그</font>
                </font>
                </a>
                <p className="_attribution_hqji1_20">
                  <a href="https://spartacodingclub.kr/">
                  <font >
                    <font >템플릿 작성자: 스파르타 코딩 클럽</font>
                  </font> 
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
