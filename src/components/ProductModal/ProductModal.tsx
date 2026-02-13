import { useEffect } from "react";
import type { Product } from "../../types";
import {
	Overlay,
	Modal,
	ModalImage,
	ModalContent,
	ModalTitle,
	ModalCategory,
	ModalDescription,
	ModalPrice,
	CloseButton,
} from "./styled";

type Props = {
	product: Product | null;
	onClose: () => void;
};

export default function ProductModal({ product, onClose }: Props) {
	// close on ESC key
	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", handleEsc);
		return () => window.removeEventListener("keydown", handleEsc);
	}, [onClose]);

	if (!product) return null;

	return (
		<Overlay onClick={onClose}>
			<Modal onClick={(e: React.MouseEvent) => e.stopPropagation()}>
				<CloseButton onClick={onClose}>✕</CloseButton>

				<ModalImage src={product.image} />

				<ModalContent>
					<ModalCategory $type={product.category}>
						{product.category}
					</ModalCategory>
					<ModalTitle>{product.title}</ModalTitle>
					<ModalDescription>{product.description}</ModalDescription>
					<ModalPrice>${product.price}</ModalPrice>
				</ModalContent>
			</Modal>
		</Overlay>
	);
}
