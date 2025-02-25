import { Link } from "react-router-dom";
import CommentScript from '../components/CommentScript';
import '../styles/blog.css';

export default function Blogfooter(text) {
    return (
        <>
        <div className="_wrapper_hqji1_1">
            <div className="_content_hqji1_8">
                <div>
                    <div className="_wrapper_ye7lh_1">
                        <Link to="/">
                            <div>스파르타 코딩 클럽 블로그</div>
                        </Link>
                    </div>
                    <p className="_attribution_hqji1_20">
                        <a href="https://spartacodingclub.kr/">
                        <font>
                            <font>템플릿 작성자: 스파르타 코딩 클럽</font>
                        </font> 
                        </a>
                    </p>
                </div>
            </div>
        </div>
        <br/>
        <CommentScript />
     </>
    );
}