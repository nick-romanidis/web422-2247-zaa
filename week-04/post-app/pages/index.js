import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import PostList from "@/components/PostList"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// This function is called a build time
export function getStaticProps() {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then(data => {
        resolve({ props: { posts: data } });
      });
  });
}

export default function Home(props) {
  return (
    <>
      <PostList posts={props.posts} />
    </>
  );
}
