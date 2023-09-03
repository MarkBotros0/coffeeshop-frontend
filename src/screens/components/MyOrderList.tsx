import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { decrementQuantity, incrementQuantity, placeOrder, resetMyOrder } from "../../redux/orderSlice"
import { Button } from "react-bootstrap"

const MyOrderList = () => {
    const order = useAppSelector(state => state.order.lineItems)
    const menu = useAppSelector(state => [...state.menu.drinks, ...state.menu.coffeeBeans, ...state.menu.goodies])
    const dispatch = useAppDispatch()

    const orderedItemsWithDetails = order.map((orderItem) => {
        const menuItem = menu.find((item) => item.id === orderItem.productId);
        return {
            ...orderItem,
            ...menuItem,
        };
    });

    const calculateSumOfProducts = () => {
        let sum = 0;
        for (const obj of orderedItemsWithDetails) {
            const multiplicationResult = obj.price ? (obj.price * obj.quantity) : 0;
            sum += multiplicationResult;
        }
        return sum.toFixed(2);
    }

    const handlePlaceOrder = () => {
        dispatch(placeOrder())
        dispatch(resetMyOrder());
    }

    return (
        <>
            {
                order.length > 0 &&
                <div className="drawer shadow">
                    <div className="p-3 flex-column d-flex justify-content-between h-100" style={{ overflow: "auto" }}>
                        <div>
                            <h4 className="mb-3">My Order</h4>
                            {orderedItemsWithDetails.map(item => (
                                <div key={item.productId} className="d-flex mb-4    " style={{ alignItems: "start", height: "110px" }}>
                                    <img src={item.url} className="img-fluid" style={{ width: "110px", height: "100%", objectFit: "cover", borderRadius: "30px" }} />

                                    <div className="d-flex flex-column justify-content-between h-100 w-100" >
                                        <p className="p-0 m-0 me-auto ps-3 pt-2" style={{ fontSize: "17px", fontWeight: "bold", textAlign: "left" }}>{item.name}</p>
                                        <div className="d-flex justify-content-center ms-2 pb-2">

                                            <h3 className="m-0 p-0" style={{ fontSize: "20px" }}>{`${item.price ? (item.quantity * item.price).toFixed(2) : 0}$`}</h3>
                                            <div className="p-0 m-0 ms-auto d-flex align-items-center" style={{ fontSize: "20px" }}>
                                                <AiOutlineMinusCircle style={{ cursor: "pointer" }} onClick={() => dispatch(decrementQuantity(item.productId))} />
                                                <p className="m-0 px-2">{item.quantity}</p>
                                                <AiOutlinePlusCircle style={{ cursor: "pointer" }} onClick={() => dispatch(incrementQuantity(item.productId))} />
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                        <div>
                            <h2>Total = {calculateSumOfProducts()}$</h2>
                            <Button style={{ fontSize: "20px" }} onClick={handlePlaceOrder}>Place Order</Button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default MyOrderList