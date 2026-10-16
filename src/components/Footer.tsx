import Link from "next/link";
import Container from "./Container";
import { getCategories } from "@/lib/data";

export default async function Footer() {
    const categories = await getCategories();

    return (
        <footer className="mt-20 border-t border-line">
            <Container className="grid gap-10 py-14 md:grid-cols-[2fr_1fr_1fr]">
                <div>
                    <p className="font-display text-3xl">Arden</p>
                    <p className="mt-3 max-w-xs text-sm text-muted">
                        Minimal everyday clothing in natural fabrics. This is a demo store built for learning.
                    </p>
                </div>

                <nav aria-label="Categories">
                    <h2 className="text-sm font-medium">Shop</h2>
                    <ul className="mt-4 space-y-2 text-sm text-muted">
                        {categories.map((c) => (
                            <li key={c.slug}>
                                <Link href={`/products?category=${c.slug}`} className="hover:text-ink">
                                    {c.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <nav aria-label="Collections">
                    <h2 className="text-sm font-medium">Collections</h2>
                    <ul className="mt-4 space-y-2 text-sm text-muted">
                        <li>
                            <Link href="/products?tag=new" className="hover:text-ink">New arrivals</Link>
                        </li>
                        <li>
                            <Link href="/products?tag=sale" className="hover:text-ink">Sale</Link>
                        </li>
                    </ul>
                </nav>
            </Container>

            <div className="border-t border-line">
                <Container className="py-5 text-xs text-muted">© Arden. All rights reserved.</Container>
            </div>
        </footer>
    );
}