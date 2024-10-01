import Link from 'next/link';

export default function Layout(props) {
    return (
        <>
            <h1>Shopping Cart System</h1>
            <Link href="/">Home</Link> |
            <Link href="/contact-us">Contact Us</Link> |
            <Link href="/shop">Product List</Link> |
            <Link href="/shop/checkout">Checkout</Link>
            <hr />
            <br />
            {props.children}
            <br />
            <p>This is a footer</p>
        </>
    );
}