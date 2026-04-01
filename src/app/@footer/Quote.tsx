import Markdown from "@/components/Markdown";
import type { Quote } from "@/types/Quote";
import Citation from "./Citation";

export default function QuoteDisplay(props: { quote: Quote }) {
    const { quote } = props;
    return (
        <figure className="quote" data-id={quote.id}>
            <blockquote>
                <Markdown>{quote.text}</Markdown>
            </blockquote>
            <figcaption>
                {quote.context && <>{quote.context}, </>}
                {quote.source && <Citation work={quote.source} />}
                {quote.example && (
                    <>
                        See: <Citation work={quote.example} />
                    </>
                )}
            </figcaption>
        </figure>
    );
}
