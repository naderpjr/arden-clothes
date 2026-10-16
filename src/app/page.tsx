import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import { getBestSellers, getCategories, getNewArrivals } from "@/lib/data";
import type { Product } from "@/lib/types";

function ProductSection({ title, href, products }: { title: string; href: string; products: Product[] }) {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-4xl md:text-5xl">{title}</h2>
          <Link href={href} className="text-sm font-medium underline underline-offset-4">
            View all
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default async function HomePage() {
  const [categories, newArrivals, bestSellers] = await Promise.all([
    getCategories(),
    getNewArrivals(4),
    getBestSellers(4),
  ]);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-line">
        <Container className="grid items-center gap-8 py-8 md:grid-cols-2 md:gap-12 md:py-12">
          <div>
            <h1 className="font-display text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
              Everyday clothes, made to last.
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted">
              Minimal pieces in natural fabrics. Cut well and built to be worn often.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link
                href="/products?tag=new"
                className="bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-ink/85"
              >
                Shop new arrivals
              </Link>
              <Link href="/products" className="text-sm font-medium underline underline-offset-4">
                Browse everything
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/5] bg-line/50">
            <Image
              src="/hero.jpg"
              alt="Model wearing the latest Arden collection"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      {/* Categories */}
      <section className="py-12 md:py-16">
        <Container>
          <h2 className="font-display text-4xl md:text-5xl">Shop by category</h2>
          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
            {categories.map((category) => (
              <Link key={category.slug} href={`/products?category=${category.slug}`} className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-line/50">
                  <Image
                    src={category.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-3 text-sm font-medium">{category.name}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <ProductSection title="New this season" href="/products?tag=new" products={newArrivals} />

      {/* Editorial */}
      <section className="border-y border-line">
        <Container className="grid items-center gap-8 py-12 md:grid-cols-2 md:gap-12 md:py-16">
          <div className="relative aspect-[4/5] bg-line/50 md:order-2">
            <Image
              src="/editorial.jpg"
              alt="Close-up of fabric and stitching"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="md:order-1">
            <h2 className="font-display text-4xl md:text-6xl">Fewer pieces, worn more.</h2>
            <p className="mt-5 max-w-md text-muted">
              We make a small range each season in cotton, wool and denim that gets better with age.
              No trends to chase, just clothes you reach for first.
            </p>
            <Link href="/products" className="mt-8 inline-block text-sm font-medium underline underline-offset-4">
              Shop the collection
            </Link>
          </div>
        </Container>
      </section>

      <ProductSection title="Best sellers" href="/products" products={bestSellers} />

      {/* Store promises */}
      <section className="border-t border-line">
        <Container>
          <ul className="grid gap-6 py-10 text-sm sm:grid-cols-3">
            <li>
              <p className="font-medium">Free shipping over $100</p>
              <p className="mt-1 text-muted">Delivered in 3 to 5 working days.</p>
            </li>
            <li>
              <p className="font-medium">30-day returns</p>
              <p className="mt-1 text-muted">Changed your mind? Send it back.</p>
            </li>
            <li>
              <p className="font-medium">Natural fabrics</p>
              <p className="mt-1 text-muted">Organic cotton, wool and denim.</p>
            </li>
          </ul>
        </Container>
      </section>
    </>
  );
}