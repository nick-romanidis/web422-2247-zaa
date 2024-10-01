import { useRouter } from "next/router";

export default function ProductInfo() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <p>Product ID: {id}</p>
        </>
    );
}