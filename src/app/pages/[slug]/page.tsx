import DateTime from "@/components/Date";
import type { Page } from "@/types/Page";

export default async function SlugPage(props: PageProps<"/pages/[slug]">) {
  const { slug } = await props.params;

  const data = await fetch(`https://localhost:7072/pages/${slug}`);
  const page: Page = await data.json();

  return (
    <article>
      <header>
        <h1>{page.title}</h1>
        <p>{page.description}</p>
        {page.updatedOn && (
          <p>
            Last updated on <DateTime value={page.updatedOn} />
          </p>
        )}
        {page.publishedOn && (
          <p>
            First published on <DateTime value={page.publishedOn} />
          </p>
        )}
      </header>

      {page.content}
    </article>
  );
}
