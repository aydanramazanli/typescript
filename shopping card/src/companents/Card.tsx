import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCard } from "../context/ShoppingCard";
import SingleCard from "./SingleCard";
import storeItems from "../data/items.json";

type ShoppingCartProps = {
  isOpen: boolean;
};

export default function Card({ isOpen }: ShoppingCartProps) {
  const { closeCard, cardItem } = useShoppingCard();
  return (
    <Offcanvas show={isOpen} onHide={closeCard} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cardItem.map((item) => (
            <SingleCard key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total:
            {cardItem.reduce((total, cardItem) => {
              const item = storeItems.find((item) => item.id === cardItem.id);
              return total + (item?.price || 0) * cardItem.sum
            },0)}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
