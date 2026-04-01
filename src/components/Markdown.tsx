import { MarkdownAsync } from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import rehypeStarryNight from "rehype-starry-night";
import remarkGfm from "remark-gfm";

export default function Markdown(props: {
  children: string | null | undefined;
}) {
  return (
    <MarkdownAsync
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeStarryNight]}
    >
      {props.children}
    </MarkdownAsync>
  );
}
