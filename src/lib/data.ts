import type {
    CategoryInfo,
    Product,
    ProductColor,
    ProductFilters,
    ProductSize,
} from "./types";

const palette: Record<string, ProductColor> = {
    black: { name: "Black", hex: "#141414" },
    offWhite: { name: "Off White", hex: "#ecebe6" },
    stone: { name: "Stone", hex: "#b9b3a6" },
    sand: { name: "Sand", hex: "#cdbf9f" },
    olive: { name: "Olive", hex: "#5b6048" },
    navy: { name: "Navy", hex: "#1f2a44" },
    grey: { name: "Heather Grey", hex: "#9a9a98" },
    indigo: { name: "Indigo", hex: "#2f3b5c" },
};

const sizeRun = (labels: string[], soldOut: string[] = []): ProductSize[] =>
    labels.map((label) => ({ label, inStock: !soldOut.includes(label) }));

const letters = (soldOut?: string[]) => sizeRun(["XS", "S", "M", "L", "XL"], soldOut);
const waists = (soldOut?: string[]) => sizeRun(["28", "30", "32", "34", "36"], soldOut);
const oneSize = sizeRun(["One size"]);

const photos = (slug: string) => [`/products/${slug}-1.jpg`, `/products/${slug}-2.jpg`];


const categories: CategoryInfo[] = [
    { slug: "tees", name: "T-shirts", image: "/products/heavyweight-tee-1.jpg" },
    { slug: "hoodies", name: "Hoodies", image: "/products/everyday-hoodie-1.jpg" },
    { slug: "pants", name: "Pants", image: "/products/wide-leg-trousers-1.jpg" },
    { slug: "jackets", name: "Jackets", image: "/products/coach-jacket-1.jpg" },
    { slug: "accessories", name: "Accessories", image: "/products/canvas-tote-1.jpg" },
];

const products: Product[] = [
    {
        id: "p01",
        slug: "heavyweight-tee",
        name: "Heavyweight Tee",
        description:
            "A thick, structured tee that keeps its shape wash after wash. Cut slightly boxy with a clean crew neck.",
        price: 38,
        category: "tees",
        colors: [palette.offWhite, palette.black, palette.stone],
        sizes: letters(["XS"]),
        images: photos("heavyweight-tee"),
        tags: ["bestseller"],
        featured: true,
        createdAt: "2026-06-12",
        material: "100% organic cotton, 240 gsm",
        fit: "Relaxed, true to size",
    },
    {
        id: "p02",
        slug: "pocket-tee",
        name: "Pocket Tee",
        description:
            "Soft midweight jersey with a single chest pocket. An easy layer under a jacket or on its own.",
        price: 34,
        category: "tees",
        colors: [palette.grey, palette.navy, palette.olive],
        sizes: letters(),
        images: photos("pocket-tee"),
        tags: ["new"],
        featured: false,
        createdAt: "2026-10-05",
        material: "100% cotton, 180 gsm",
        fit: "Regular fit",
    },
    {
        id: "p03",
        slug: "everyday-hoodie",
        name: "Everyday Hoodie",
        description:
            "A brushed-back fleece hoodie with a roomy hood and a front pouch pocket. Warm without feeling bulky.",
        price: 89,
        category: "hoodies",
        colors: [palette.black, palette.grey, palette.olive],
        sizes: letters(["XL"]),
        images: photos("everyday-hoodie"),
        tags: ["bestseller"],
        featured: true,
        createdAt: "2026-07-02",
        material: "80% cotton, 20% recycled polyester, 400 gsm",
        fit: "Relaxed, size down for a closer fit",
    },
    {
        id: "p04",
        slug: "zip-hoodie",
        name: "Zip Hoodie",
        description:
            "A full-zip hoodie in dense loopback cotton with metal hardware and ribbed cuffs.",
        price: 98,
        compareAtPrice: 120,
        category: "hoodies",
        colors: [palette.stone, palette.navy],
        sizes: letters(["S"]),
        images: photos("zip-hoodie"),
        tags: ["sale"],
        featured: false,
        createdAt: "2026-05-20",
        material: "100% cotton loopback, 420 gsm",
        fit: "Regular fit",
    },
    {
        id: "p05",
        slug: "wide-leg-trousers",
        name: "Wide-Leg Trousers",
        description:
            "Pleated trousers with a high rise and a long, wide leg. Drapes well and looks sharp with a plain tee.",
        price: 110,
        category: "pants",
        colors: [palette.black, palette.sand],
        sizes: waists(["28"]),
        images: photos("wide-leg-trousers"),
        tags: ["new"],
        featured: true,
        createdAt: "2026-09-28",
        material: "65% recycled polyester, 35% wool blend",
        fit: "Wide leg, true to size",
    },
    {
        id: "p06",
        slug: "straight-chinos",
        name: "Straight Chinos",
        description:
            "Classic straight-leg chinos in washed cotton twill. Comfortable from the first wear.",
        price: 84,
        category: "pants",
        colors: [palette.sand, palette.olive, palette.navy],
        sizes: waists(),
        images: photos("straight-chinos"),
        tags: ["bestseller"],
        featured: false,
        createdAt: "2026-04-15",
        material: "98% cotton, 2% elastane twill",
        fit: "Straight leg, true to size",
    },
    {
        id: "p07",
        slug: "relaxed-jeans",
        name: "Relaxed Jeans",
        description:
            "Mid-rise jeans with a relaxed thigh and a slightly tapered leg, made from rigid Japanese-style denim.",
        price: 105,
        compareAtPrice: 130,
        category: "pants",
        colors: [palette.indigo, palette.black],
        sizes: waists(["36"]),
        images: photos("relaxed-jeans"),
        tags: ["sale"],
        featured: false,
        createdAt: "2026-03-10",
        material: "100% cotton denim, 12 oz",
        fit: "Relaxed, true to size",
    },
    {
        id: "p08",
        slug: "coach-jacket",
        name: "Coach Jacket",
        description:
            "A lightweight snap-button jacket with a soft collar. Water-resistant and easy to pack.",
        price: 140,
        category: "jackets",
        colors: [palette.black, palette.olive],
        sizes: letters(["XS", "XL"]),
        images: photos("coach-jacket"),
        tags: ["new"],
        featured: true,
        createdAt: "2026-10-01",
        material: "Water-resistant cotton-nylon blend",
        fit: "Regular fit, room for a hoodie",
    },
    {
        id: "p09",
        slug: "wool-overcoat",
        name: "Wool Overcoat",
        description:
            "A long single-breasted coat in a heavy wool blend. Clean lines, deep pockets and a fully lined body.",
        price: 280,
        category: "jackets",
        colors: [palette.grey, palette.black],
        sizes: letters(),
        images: photos("wool-overcoat"),
        tags: ["bestseller"],
        featured: true,
        createdAt: "2026-08-30",
        material: "70% wool, 30% recycled polyester",
        fit: "Tailored, true to size",
    },
    {
        id: "p10",
        slug: "denim-jacket",
        name: "Denim Jacket",
        description:
            "A boxy trucker jacket in sturdy denim that fades nicely. Chest pockets and copper buttons.",
        price: 125,
        compareAtPrice: 150,
        category: "jackets",
        colors: [palette.indigo],
        sizes: letters(["M"]),
        images: photos("denim-jacket"),
        tags: ["sale"],
        featured: false,
        createdAt: "2026-02-18",
        material: "100% cotton denim, 12 oz",
        fit: "Boxy, true to size",
    },
    {
        id: "p11",
        slug: "canvas-tote",
        name: "Canvas Tote",
        description:
            "A big, sturdy tote in heavy canvas with reinforced handles and an inside pocket.",
        price: 28,
        category: "accessories",
        colors: [palette.sand, palette.black],
        sizes: oneSize,
        images: photos("canvas-tote"),
        tags: ["bestseller"],
        featured: false,
        createdAt: "2026-05-02",
        material: "100% cotton canvas, 14 oz",
        fit: "38 x 40 cm, 15 cm gusset",
    },
    {
        id: "p12",
        slug: "wool-beanie",
        name: "Wool Beanie",
        description:
            "A ribbed merino beanie with a double-layer brim. Warm, soft and not itchy.",
        price: 32,
        category: "accessories",
        colors: [palette.black, palette.grey, palette.navy],
        sizes: oneSize,
        images: photos("wool-beanie"),
        tags: ["new"],
        featured: false,
        createdAt: "2026-10-10",
        material: "100% merino wool",
        fit: "One size fits most",
    },
];

export async function getCategories(): Promise<CategoryInfo[]> {
    return categories;
}

export async function getProducts(filters: ProductFilters = {}): Promise<Product[]> {
    const { category, tag, sizes, colors, minPrice, maxPrice, q, sort = "featured" } = filters;
    const query = q?.trim().toLowerCase();

    const result = products.filter((p) => {
        if (category && p.category !== category) return false;
        if (tag && !p.tags.includes(tag)) return false;
        if (minPrice !== undefined && p.price < minPrice) return false;
        if (maxPrice !== undefined && p.price > maxPrice) return false;
        if (sizes?.length && !p.sizes.some((s) => s.inStock && sizes.includes(s.label))) return false;
        if (colors?.length && !p.colors.some((c) => colors.includes(c.name))) return false;
        if (query && !`${p.name} ${p.description}`.toLowerCase().includes(query)) return false;
        return true;
    });

    switch (sort) {
        case "newest":
            result.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
            break;
        case "price-asc":
            result.sort((a, b) => a.price - b.price);
            break;
        case "price-desc":
            result.sort((a, b) => b.price - a.price);
            break;
        default:
            result.sort((a, b) => Number(b.featured) - Number(a.featured));
    }
    return result;
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
    return products.find((p) => p.slug === slug);
}

export async function getRelatedProducts(slug: string, limit = 4): Promise<Product[]> {
    const current = products.find((p) => p.slug === slug);
    if (!current) return [];
    const others = products.filter((p) => p.slug !== slug);
    const sameCategory = others.filter((p) => p.category === current.category);
    const rest = others.filter((p) => p.category !== current.category);
    return [...sameCategory, ...rest].slice(0, limit);
}

export async function getNewArrivals(limit = 4): Promise<Product[]> {
    return products
        .filter((p) => p.tags.includes("new"))
        .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
        .slice(0, limit);
}

export async function getBestSellers(limit = 4): Promise<Product[]> {
    return products.filter((p) => p.tags.includes("bestseller")).slice(0, limit);
}

export async function getAllSlugs(): Promise<string[]> {
    return products.map((p) => p.slug);
}