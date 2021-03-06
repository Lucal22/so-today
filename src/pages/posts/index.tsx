import React from 'react';
import { GetStaticProps } from 'next';
import Posts from '../../container/Posts/Posts';
import { FullCategory } from '../../domain/categories/categories';
import { FullPost } from '../../domain/posts/post';

export type PostsProps = {
  posts: FullPost;
  categories: FullCategory;
};

export default function index({ posts, categories }: PostsProps) {
  return <Posts posts={posts} categories={categories} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts(`pagination[start]=0&pagination[limit]=20`);
  const categories = await getAllCategories();
  return {
    props: { posts, categories },
  };
};
