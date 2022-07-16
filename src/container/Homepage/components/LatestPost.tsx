import React from 'react';

export type LatestPostProps = {
  lastPostUrl: string;
  lastPostTitle: string;
  lastSlug: string;
  lastCategory: string;
};

export default function LatestPost({ lastPostUrl, lastPostTitle, lastSlug, lastCategory }: LatestPostProps) {
  return (
    <section className="w-full">
      <div>
        <a href={`/posts/${lastCategory}/${lastSlug}`}>
          <img
            className="max-w-full cursor-pointer rounded-tr-[10px] border-[1px] border-slate-300 dark:border-black dark:border-b-darkbg"
            src={lastPostUrl}
          />
        </a>
        <div className="flex h-full max-w-full  justify-center rounded-b-[10px] border-x-[1px] border-b-[1px]  border-slate-300 bg-slate-100 p-2 align-middle dark:border-black  dark:bg-darknav">
          <a href={`/posts/${lastCategory}/${lastSlug}`} className="text-lg text-black dark:text-slate-200 md:text-2xl">
            <h1 className="hover:text-blue-500 dark:hover:text-blue-500">{lastPostTitle}</h1>
          </a>
        </div>
      </div>
    </section>
  );
}
