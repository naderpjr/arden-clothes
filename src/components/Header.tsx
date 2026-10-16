"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, ShoppingBag, X } from "lucide-react";
import Container from "./Container";

const links = [
    { href: "/products", label: "Shop all" },
    { href: "/products?tag=new", label: "New" },
    { href: "/products?tag=sale", label: "Sale" },
];

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
            <Container className="flex h-16 items-center justify-between">
                <button
                    className="-ml-2 p-2 md:hidden"
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>

                <Link href="/" className="font-display text-3xl leading-none">
                    Arden
                </Link>

                <nav className="hidden gap-8 text-sm md:flex" aria-label="Main">
                    {links.map((link) => (
                        <Link key={link.href} href={link.href} className="underline-offset-8 hover:underline">
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* The cart is wired up in a later step */}
                <button className="-mr-2 p-2" aria-label="Cart">
                    <ShoppingBag size={22} />
                </button>
            </Container>

            {open && (
                <nav id="mobile-menu" className="border-t border-line md:hidden" aria-label="Mobile">
                    <Container className="flex flex-col py-2">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="border-b border-line py-4 text-lg"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </Container>
                </nav>
            )}
        </header>
    );
}