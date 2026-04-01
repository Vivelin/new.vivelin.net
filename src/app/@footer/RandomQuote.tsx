import { apiFetch } from "@/lib/fetch";
import type { Quote } from "@/types/Quote";
import QuoteDisplay from "./Quote";

async function getQuote(id: number | "random" | "qotd") {
    const quote = await apiFetch<Quote>(`/quotes/${id}`);
    return quote;
}

export default async function RandomQuote() {
    try {
        const quote = await getQuote("random");
        return <QuoteDisplay quote={quote} />;
    } catch (e) {
        console.error("Failed to get random quote", e);
        return null;
    }
}
