import { Offcanvas, Stack } from "react-bootstrap"
import {useShoppingCard} from '../context/ShoppingCard'




type ShoppingCartProps = {
  isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCard,} = useShoppingCard()

  return (
    <Offcanvas show={true} onHide={closeCard} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
       
          <div className="ms-auto fw-bold fs-5">
            Total
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}