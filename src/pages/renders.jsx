
// const renderers = () => {
//     code({ node, inline, className, children, ...props }) {
//         const match = /language-(\w+)/.exec(className || '');
//         return(
//             (!inline && match) ?
//           	<SyntaxHighlighter
//                 {...props}
//                 language={match[1]}
//                 className = "codeRefer" >
//               	{String(children).replace(/\n$/, '')}
//             </SyntaxHighlighter> :
//           	<SyntaxHighlighter
//                 {...props}
//                 className = "backtick" >
//               	{String(children)}
//             </SyntaxHighlighter>
//         );
//     }
// };