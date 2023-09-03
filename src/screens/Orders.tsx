import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { getOrders } from "../redux/orderSlice"

const Orders = () => {

  const dispatch = useAppDispatch()
  const allOrders = useAppSelector(state => state.order.allOrders)

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch])

  return (
    // <div className="mt-5 pt-5" style={{  backgroundClip: "#f0f0f0",marginTop:"70px" }}>

    <div style={{ backgroundColor: "#f0f0f0", paddingTop: "120px" }}>

      {allOrders?.length > 0 ?
        <div className="col-md-6 mx-auto" >


          {allOrders.map(order => (
            <div className="d-flex flex-column  myCard mb-5 p-3" style={{ overflow: "hidden" }}>

              <div className="d-flex align-items-start justify-content-between">
                <h2 className="mb-5" style={{ alignItems: "start" }}>Order Number {order.orderId}</h2>
                <h5 className="mb-5" style={{ alignItems: "start", color: "grey", fontSize: "15px" }}>Order Created At {order.createdAt}</h5>
              </div>

              {order.lineItems.map(lineItem => (
                <div className="d-flex align-items-center mb-3">
                  <img src={lineItem.product?.url} style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "15px" }} alt="#" />

                  <div className="d-flex align-items-center w-100 justify-content-between row" >
                    <div className="col-5 d-flex align-items-center">
                      <h1 className="m-0 p-0 ms-3" style={{ fontSize: "25px" }}>{lineItem.quantity}</h1>
                      <h1 className="m-0 p-0 ms-3" style={{ fontSize: "25px" }}>{lineItem.product?.name}</h1>
                    </div>
                    <h1 className="m-0 p-0 pe-5 col-4" style={{ fontSize: "30px" }}>{`${lineItem.quantity} x ${lineItem.product.price.toFixed(2)}$`}</h1>
                    <h1 className="m-0 p-0 pe-5 col-3" style={{ fontSize: "30px" }}>{`${(lineItem.quantity * lineItem.product.price).toFixed(2)}$`}</h1>
                  </div>
                </div>
              ))}
              <div className="d-flex w-100 justify-content-center mt-2">
                <h2 className="m-0 p-0 " style={{ fontWeight: "bold" }}>Total Price = </h2>
                <h2 className="m-0 p-0 ps-3" style={{ fontWeight: "bold" }}> {(order.totalPrice).toFixed(2)}$</h2>
              </div>
            </div>
          ))}
        </div>
        :
        <h1>No Orders were placed</h1>
      }
    </div>
  )
}

export default Orders