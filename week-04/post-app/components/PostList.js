import Post from "@/components/Post"

export default function PostList({ posts }) {
    return (
        <>
            {
                posts?.map((post) => (
                    <Post key={post.id} post={post} />
                ))
            }
        </>
    );
}
