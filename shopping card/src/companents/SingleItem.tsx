import { Button, Card } from "react-bootstrap";
import {useShoppingCard} from '../context/ShoppingCard'

type itemProps = {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
};
export default function SingleItem({ id, imgUrl, price, name }: itemProps) {
  const {getCardSum, increaseSum,decreaseSum, removeSum}= useShoppingCard()
  const sum = getCardSum(id);
  return (
    <Card style={{ width: "20rem", margin: "auto" }}>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">${price}</span>
        </Card.Title>
        <div>
          {sum === 0 ? <Button variant="warning" className="w-100" onClick={() =>increaseSum(id)}>+ Add to card</Button> : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem", justifyContent:"space-evenly" }}
            >
              <div
                className="d-flex align-items-center  "
                style={{ gap: ".5rem", justifyContent:"space-evenly" }}
              >
                <Button variant="warning" onClick={() =>decreaseSum(id)}>-</Button>
                <div>
                  <span className="fs-3">{sum}</span> in cart
                </div>
                <Button variant="warning" onClick={() =>increaseSum(id)}>+</Button>
              </div>
              <Button
               onClick={() =>removeSum(id)}
                variant="danger"
                size="sm"
              >
                Clear
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
