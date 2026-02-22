import { PageBuilder } from "@/components/page-builder";
import { sanityFetch } from "@/sanity/lib/live";
import { PAGE_QUERY } from "@/sanity/lib/queries";
import type { Metadata } from "next";

type RouteProps = {
  params: Promise<{ slug: string }>;
};

const getPage = async (params: RouteProps["params"]) =>
  sanityFetch({
    query: PAGE_QUERY,
    params: await params,
  });

export async function generateMetadata({
  params,
}: RouteProps): Promise<Metadata> {
  const { data: page } = await getPage(params);

  return {
    title: page.seo.title,
  };
}

export default async function Page({ params }: RouteProps) {
  const { data: page } = await getPage(params);

  return page?.content ? (
    <PageBuilder
      documentId={page._id}
      documentType={page._type}
      content={page.content}
    />
  ) : null;
}
