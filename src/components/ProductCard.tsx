import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/format";

const SIZES = "(min-width: 1024px) 25vw, 50vw";

export default function ProductCard({ product }: { product: Product }) {
    const [first, second] = product.images;
    const onSale = product.compareAtPrice !== undefined;

    return (
        <Link href={`/products/${product.slug}`} className="group block">
            <div className="relative aspect-[4/5] overflow-hidden bg-line/50">
                <Image
                    src={first}
                    alt={product.name}
                    fill
                    sizes={SIZES}
                    className={`object-cover transition-opacity duration-500 ${second ? "group-hover:opacity-0" : ""}`}
                />
                {second && (
                    <Image
                        src={second}
                        alt=""
                        fill
                        sizes={SIZES}
                        className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                )}

                {(product.tags.includes("new") || onSale) && (
                    <span className="absolute left-3 top-3 bg-paper px-2.5 py-1 text-xs font-medium">
                        {onSale ? "Sale" : "New"}
                    </span>
                )}
            </div>

            <div className="mt-3 flex items-start justify-between gap-3 text-sm">
                <div>
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="mt-0.5 text-muted">
                        {product.colors.length} {product.colors.length === 1 ? "color" : "colors"}
                    </p>
                </div>
                <p className="text-right">
                    {onSale && (
                        <span className="mr-2 text-muted line-through">{formatPrice(product.compareAtPrice!)}</span>
                    )}
                    <span className={onSale ? "text-accent" : ""}>{formatPrice(product.price)}</span>
                </p>
            </div>
        </Link>
    );
}