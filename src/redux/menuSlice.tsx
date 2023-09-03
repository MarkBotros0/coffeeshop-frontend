import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export type productType = {
    id: number,
    name: string,
    availablefrom: string,
    availableTo: string,
    url: string,
    price: number,
    quantityLeft?: number
}

type Menu = {
    drinks: productType[],
    coffeeBeans: productType[],
    goodies: productType[]
}

const initialState: Menu = {
    drinks: [],
    coffeeBeans: [],
    goodies: []
};

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        addDrinks: (state, actions) => {
            state.drinks = actions.payload;
        },
        addCoffeeBeans: (state, actions) => {
            state.coffeeBeans = actions.payload;
        },
        addGoodies: (state, actions) => {
            state.goodies = actions.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDrinks.fulfilled, (state, action) => {
                state.drinks = action.payload;
            })
            .addCase(fetchCoffeeBeans.fulfilled, (state, action) => {
                state.coffeeBeans = action.payload;
            })
            .addCase(fetchGoodies.fulfilled, (state, action) => {
                state.goodies = action.payload;
            });
    },
});

export const fetchDrinks = createAsyncThunk('menu/fetchDrinks', async () => {
    try {
        const drinksResponse = await fetch('http://localhost:8080/drinks', {
            method: 'GET',
            mode: 'cors'
        });
        const drinks = await drinksResponse.json();
        return drinks;
    } catch (error) {
        console.error('Error fetching items:', error);
        throw error;
    }
})

export const fetchCoffeeBeans = createAsyncThunk('menu/fetchCoffeeBeans', async () => {
    try {
        const coffeeBeansResponse = await fetch('http://localhost:8080/coffeebeans', {
            method: 'GET',
            mode: 'cors'
        });
        const coffeeBeans = await coffeeBeansResponse.json();
        return coffeeBeans;
    } catch (error) {
        console.error('Error fetching items:', error);
        throw error;
    }
})

export const fetchGoodies = createAsyncThunk('menu/fetchGoodies', async () => {
    try {
        const goodiesResponse = await fetch('http://localhost:8080/goodies', {
            method: 'GET',
            mode: 'cors'
        });

        const goodies = await goodiesResponse.json();
        return goodies;
    } catch (error) {
        console.error('Error fetching items:', error);
        throw error;
    }
})

export const { addDrinks, addCoffeeBeans, addGoodies } = menuSlice.actions;

export default menuSlice.reducer;