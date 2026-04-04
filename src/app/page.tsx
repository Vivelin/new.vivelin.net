import Tag from "@/components/Tag";
import TagList from "@/components/TagList";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <Link href="/pages/test">Test</Link>
            <h1>Vivelin</h1>
            <h2>Video games</h2>
            <TagList>
                <Tag name="Exploration">
                    <p>
                        I love exploring in games; in <cite>Guild Wars 2</cite>,
                        for example, I got 100% map completion even when the PvP
                        areas were still part of it.
                    </p>
                    <p>
                        Completion is only a small part of it, though. In{" "}
                        <cite>Arknights: Endfield</cite> I love walking around
                        Wuling just to take in the scenery.
                    </p>
                </Tag>
                <Tag name="Immersion" />
            </TagList>
        </main>
    );
}
