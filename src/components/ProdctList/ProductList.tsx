import type { Product } from "../../types";
import {
	Button,
	Card,
	CardFooter,
	Category,
	Grid,
	ImageWrap,
	MetaRow,
	Price,
	ProductImage,
	ProductTitle,
	Rating,
} from "./styled";

type Props = {
	products: Product[];
	addToCart: (product: Product) => void;
	onSelect: (product: Product) => void;
};

function renderStars(rate: number) {
	const rounded = Math.round(rate);
	return (
		<span>
			{"★".repeat(rounded)}
			<span style={{ opacity: 0.25 }}>{"★".repeat(5 - rounded)}</span>
		</span>
	);
}

export default function ProductList({ products, addToCart, onSelect }: Props) {
	return (
		<Grid>
			{products.map((product) => (
				<Card key={product.id} onClick={() => onSelect(product)}>
					<ImageWrap>
						<ProductImage src={product.image} alt={product.title} />
					</ImageWrap>

					<Category $type={product.category}>{product.category}</Category>
					<div>
						<ProductTitle>{product.title}</ProductTitle>
					</div>
					<CardFooter>
						<Rating>
							{renderStars(product.rating.rate)}
							<span>({product.rating.count})</span>
						</Rating>

						<MetaRow>
							<Price>${product.price}</Price>
						</MetaRow>
					</CardFooter>

					<Button
						onClick={(e) => {
							e.stopPropagation();
							addToCart(product);
						}}
					>
						Add to Cart
					</Button>
				</Card>
			))}
		</Grid>
	);
}
