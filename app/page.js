import { getAllArticles } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { draftMode } from "next/headers";
import { Suspense } from "react";
import VideoComponent from "@/app/ui/VideoComponent";
import FadeInAnimation from "./components/FadeInAnimation";
import Logo from "./components/Logo";

const backgroundImageUrl = "./SEC_1.jpg";

export default async function Home() {
  const { isEnabled } = draftMode();
  const articles = await getAllArticles(10, isEnabled);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between  bg-white">
      <section
        className="relative h-screen w-screen bg-fixed bg-cover bg-center "
        // style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="space-y-12">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6 p-4">
            {articles.map((article) => (
              <article
                key={article.sys.id}
                className="h-full flex flex-col shadow-lg overflow-hidden"
              >
                <Link href={`/articles/${article.slug}`}>
                  <h3 className="text-1l bg-[#e7e4df] font-bold leading-tight text-zinc-900 dark:text-zinc-50  p-2">
                    {article.title}
                  </h3>
                  <Image
                    alt="placeholder"
                    className=" object-cover w-full grayscale"
                    height="375"
                    src={article.articleImage.url}
                    width="366"
                  />
                </Link>
              </article>
            ))}
          </div>
        </div>
        <h1 className="text-3xl p-4 font-bold tracking-tighter absolute bottom-0 left-0 sm:text-5xl">
          Anfang der 1970er regierte in Chile für 1000 Tage das linke Bündnis
          der Unidad Popular. Gemeinsam mit der Bevölkerung arbeitete es an
          einem ganz eigenen demokratischen Sozialismus. Daran beteiligt waren
          auch Unterstütz*erinnen aus aller Welt. Ihnen gewidmet ist diese
          Website.
        </h1>
      </section>
      <section className="w-full pt-12 bg-[#f0f0f0]">
        <div className="mx-auto  space-y-12 px-4 md:px-6">
          <div className="flex flex-col  items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Welcome to our Knowledge Base
              </h1>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                Discover our latest articles and stay up to date with the newest
                technologies, features, and trends.
              </p>
            </div>
          </div>
          <div className="space-y-12">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {articles.map((article) => (
                <article
                  key={article.sys.id}
                  className="h-full flex flex-col shadow-lg overflow-hidden"
                >
                  <Image
                    alt="placeholder"
                    className=" object-cover w-full grayscale"
                    height="375"
                    src={article.articleImage.url}
                    width="366"
                  />
                  <div className="flex-1 p-6">
                    <Link href={`/articles/${article.slug}`}>
                      <h3 className="text-2xl font-bold leading-tight text-zinc-900 dark:text-zinc-50  py-4">
                        {article.title}
                      </h3>
                    </Link>
                    <div className="inline-block rounded-full bg-zinc-100 px-3 py-1 text-sm font-semibold text-zinc-800">
                      {article.categoryName}
                    </div>
                    <p className="max-w-none text-zinc-500 mt-4 mb-2 text-sm dark:text-zinc-400">
                      {article.summary}
                    </p>
                    <p className="max-w-none text-zinc-600 mt-2 mb-2 text-sm font-bold dark:text-zinc-400">
                      Written by: {article.authorName}
                    </p>
                    <div className="flex justify-end">
                      <Link
                        className="inline-flex h-10 items-center justify-center text-sm font-medium"
                        href={`/articles/${article.slug}`}
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        <Suspense fallback={<p>Loading video...</p>}>
          <VideoComponent />
        </Suspense>
      </section> */}
      <section
        className="bg-fixed h-screen w-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      ></section>
    </main>
  );
}
