export type Category = "tees" | "hoodies" | "pants" | "jackets" | "accessories";
export type Tag = "new" | "sale" | "bestseller";
export type SortOption = "featured" | "newest" | "price-asc" | "price-desc";

export type ProductColor = { name: string; hex: string };
export type ProductSize = { label: string; inStock: boolean };

export type Product = {
    id: string;
    slug: string;
    name: string;
    description: string;
    price: number;
    compareAtPrice?: number; 
    category: Category;
    colors: ProductColor[];
    sizes: ProductSize[];
    images: string[];
    tags: Tag[];
    featured: boolean;
    createdAt: string; 
    material: string;
    fit: string;
};

export type CategoryInfo = { slug: Category; name: string; image: string };

export type ProductFilters = {
    category?: Category;
    tag?: Tag;
    sizes?: string[];
    colors?: string[];
    minPrice?: number;
    maxPrice?: number;
    q?: string;
    sort?: SortOption;
};