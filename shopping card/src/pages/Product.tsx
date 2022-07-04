import items from "../data/items.json";
import { Col, Row } from "react-bootstrap";
import SingleItem from '../companents/SingleItem'

export default function Product() {
  return (
    <>
      <h1>Product</h1>
      <Row md={2} xs={1} lg={3} className="g-5">
        {items.map((item) => (
            <Col key ={item.id}>
              
              <SingleItem {...item}/> 
               </Col>
        ))}
      </Row>
    </>
  );
}
