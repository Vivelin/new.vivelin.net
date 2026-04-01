import { type CreativeWork, isVideo } from "@/types/CreativeWork";

export default function Citation(props: { work: CreativeWork }) {
    const { work } = props;

    return (
        <>
            {work.author && <span className="author">{work.author}</span>}
            <cite>
                <a href={work.uri} target="_blank" rel="external">
                    {work.title && (
                        <>
                            <span className="title">“{work.title}”</span>,{" "}
                        </>
                    )}
                    {work.series && (
                        <span className="series">{work.series}</span>
                    )}
                </a>
            </cite>

            {isVideo(work) && (
                <>
                    {" "}
                    {work.season && (
                        <span className="season">Season {work.season}</span>
                    )}
                    {work.episode && (
                        <span className="episode">Episode {work.episode}</span>
                    )}
                </>
            )}

            {work.publisher && (
                <span className="published">
                    {" "}
                    ({work.publisher}, {work.publicationDate})
                </span>
            )}
        </>
    );
}
