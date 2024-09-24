export default function Post({ post }) {
    return (
        <div>
            <strong>User ID:</strong> {post?.userId}<br />
            <strong>Title:</strong> {post?.title}<br />
            <strong>Body:</strong> {post?.body}<br />
        </div>
    );
}