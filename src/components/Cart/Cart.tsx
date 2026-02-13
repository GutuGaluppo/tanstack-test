import type { Product } from "../../types";
import {
	CartItem,
	Empty,
	CartProduct,
	CartThumb,
	CartTitle,
	Quantity,
	QtyControls,
	QtyButton,
	RemoveButton,
} from "./styled";

type Props = {
	cart: (Product & { quantity: number })[];
	incrementQuantity: (id: number) => void;
	decrementQuantity: (id: number) => void;
	removeFromCart: (id: number) => void;
};

export default function Cart({
	cart,
	incrementQuantity,
	decrementQuantity,
	removeFromCart,
}: Props) {
	if (cart.length === 0) return <Empty>Cart is empty</Empty>;

	return (
		<ul style={{ padding: 0, listStyle: "none", margin: 0 }}>
			{cart.map((item) => (
				<CartItem key={item.id}>
					<CartProduct>
						<CartThumb src={item.image} />

						<div>
							<CartTitle title={item.title}>{item.title}</CartTitle>

							<Quantity>{item.quantity}</Quantity>
						</div>
					</CartProduct>

					<QtyControls>
						{item.quantity > 1 && (
							<QtyButton onClick={() => decrementQuantity(item.id)}>
								−
							</QtyButton>
						)}
						<QtyButton onClick={() => incrementQuantity(item.id)}>+</QtyButton>

						<RemoveButton onClick={() => removeFromCart(item.id)}>
							✕
						</RemoveButton>
					</QtyControls>
				</CartItem>
			))}
		</ul>
	);
}
