import Head from 'next/head';

import Nav from '../components/Nav';
import PostCard from '../components/PostCard';


export default function Home({ posts }) {
    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>

            <Nav />

            <main>
                <div className="flex flex-col">
                    {posts.length === 0 ? (
                        <h2>No added posts</h2>
                    ) : (
                        <ul>
                            {posts.map((post, i) => (
                                <PostCard post={post} key={i} />
                            ))}
                        </ul>
                    )}
                </div>
            </main>
        </div>
    );
}

export async function getServerSideProps(ctx) {

  return {
      props: {
          posts: ['message'],
      },
  };
}