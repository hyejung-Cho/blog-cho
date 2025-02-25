import { Link } from "react-router-dom";
import '../styles/blog.css';

export default function Bloghead() {
   return (
    <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.cdnfonts.com/css/pokemon-solid" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&amp;display=swap" rel="stylesheet" />
        <title>스파르타 블로그</title>
        <script type="module" src="../assets/index-769ab863.js"></script>
        {/* <script src="https://utteranc.es/client.js" repo="https://github.com/hyejung-Cho/blog-cho" issue-term="pathname" label="blog-comment" theme="github-dark-orange" crossorigin="anonymous" async></script>         */}

        <link rel="stylesheet" href="../assets/index-1858a881.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.2.0/github-markdown-light.css" integrity="sha512-n5zPz6LZB0QV1eraRj4OOxRbsV7a12eAGfFcrJ4bBFxxAwwYDp542z5M0w24tKPEhKk2QzjjIpR5hpOjJtGGoA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            
        <div className="_wrapper_ye7lh_1">
            <Link to="/">
                <font>스파르타 코딩 클럽 블로그</font>
            </Link>       
        </div>
       <br/>
    </>
   );
}