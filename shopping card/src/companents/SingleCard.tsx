import { Button, Stack } from "react-bootstrap";
import { useShoppingCard } from "../context/ShoppingCard";
import storeItems from "../data/items.json";

type SingleCardProps = {
  id: number;
  sum: number;
};

export default function SingleCard({ id, sum }: SingleCardProps) {
  const { removeSum } = useShoppingCard();
  const item = storeItems.find((item) => item.id === id);
  if (item == null) return null;
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        alt="cardImg"
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}
          {sum > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              {sum} eded
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          ${item.price}
        </div>
      </div>
<div>${item.price * sum}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeSum(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
