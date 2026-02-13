import { useState } from "react";
import Cart from "./components/Cart";
import ProductList from "./components/ProdctList";
import ProductModal from "./components/ProductModal";
import { useProducts } from "./hooks/useProducts";
import {
	Backdrop,
	CartCount,
	CartToggle,
	Page,
	Panel,
	Sidebar,
	Title,
} from "./styled";
import type { Product } from "./types";
import cartIcon from "./assets/cart_icon.png";

type CartItem = Product & { quantity: number };

export default function App() {
	const { data: products, isLoading, error } = useProducts();
	const [cart, setCart] = useState<CartItem[]>([]);
	const [cartOpen, setCartOpen] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

	function addToCart(product: Product) {
		setCart((prev) => {
			const existing = prev.find((item) => item.id === product.id);

			if (existing) {
				return prev.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item,
				);
			}

			return [...prev, { ...product, quantity: 1 }];
		});
	}

	function incrementQuantity(id: number) {
		setCart((prev) =>
			prev.map((item) =>
				item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
			),
		);
	}

	function decrementQuantity(id: number) {
		setCart((prev) =>
			prev
				.map((item) =>
					item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
				)
				.filter((item) => item.quantity > 0),
		);
	}

	function removeFromCart(id: number) {
		setCart((prev) => prev.filter((item) => item.id !== id));
	}

	if (isLoading) return <Page>Loading products…</Page>;
	if (error) return <Page>Something went wrong.</Page>;

	const handleTotalItems = cart.reduce(
		(total, item) => total + item.quantity,
		0,
	);

	return (
		<>
			<Page>
				<Backdrop $open={cartOpen} onClick={() => setCartOpen(false)} />

				<Panel $cartOpen={cartOpen}>
					<Title>TanStack e-commerce</Title>
					{products && (
						<ProductList
							products={products}
							addToCart={addToCart}
							onSelect={setSelectedProduct}
						/>
					)}
				</Panel>

				<Sidebar $open={cartOpen}>
					<Cart
						cart={cart}
						incrementQuantity={incrementQuantity}
						decrementQuantity={decrementQuantity}
						removeFromCart={removeFromCart}
					/>
				</Sidebar>

				<CartToggle onClick={() => setCartOpen((cartOpen) => !cartOpen)}>
					<img src={cartIcon} alt="Cart" width="60%" />
					{cart.length > 0 && <CartCount>{handleTotalItems}</CartCount>}
				</CartToggle>
			</Page>
			<ProductModal
				product={selectedProduct}
				onClose={() => setSelectedProduct(null)}
			/>
		</>
	);
}
