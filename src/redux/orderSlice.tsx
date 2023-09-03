import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { productType } from './menuSlice';

type lineItemType = {
  quantity: number,
  productId: number
}
type lineItemDetailedType = {
  quantity: number,
  product: productType,
}

type ordertype = {
  orderId: number,
  createdAt: string,
  totalPrice: number,
  lineItems: lineItemDetailedType[]
}

type orderState = {
  lineItems: lineItemType[],
  allOrders: ordertype[]

}

const initialState: orderState = {
  lineItems: [],
  allOrders: []
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (state.lineItems.findIndex(item => item.productId === action.payload) === -1) {
        state.lineItems.push({ productId: action.payload, quantity: 1 })
      }
    },
    incrementQuantity: (state, action) => {
      const itemIndex = state.lineItems.findIndex(item => item.productId === action.payload);
      if (itemIndex !== -1) {
        state.lineItems[itemIndex].quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const itemIndex = state.lineItems.findIndex(item => item.productId === action.payload);
      if (state.lineItems[itemIndex].quantity === 1) {
        state.lineItems = state.lineItems.filter(item => item.productId !== action.payload)
      } else if (itemIndex !== -1) {
        state.lineItems[itemIndex].quantity -= 1;
      }
    },
    resetMyOrder: (state) => {
      state.lineItems = []
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(getOrders.fulfilled, (state, action) => {
      state.allOrders = action.payload;
    })
  }
})


export const placeOrder = createAsyncThunk('orders/placeOrder', async (_, { getState }) => {
  try {
    const state = getState() as { order: orderState };
    const orderData = {
      lineItems: state.order.lineItems 
    };

    const placeOrderResponse = await fetch('http://localhost:8080/orders',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
      }
    );
    const result = await placeOrderResponse.json();
    alert("Thank You! your order has been placed :)")
    return result;
  } catch (error) {
    console.error('Error placing order:', error);
    // throw error;
  }
})

export const getOrders = createAsyncThunk('orders/getOrders', async () => {
  try {
    const placeOrderResponse = await fetch('http://localhost:8080/orders', { method: 'GET' });
    const result = await placeOrderResponse.json();
    return result;
  } catch (error) {
    console.error('Error placing order:', error);
    // throw error;
  }
})

export const { incrementQuantity, decrementQuantity, addItem, resetMyOrder } = orderSlice.actions;

export default orderSlice.reducer;
