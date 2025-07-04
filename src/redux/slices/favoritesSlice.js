// redux/slices/favoritesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        articles: [],
    },
    reducers: {
        toggleFavorite: (state, action) => {
            const article = action.payload;
            const exists = state.articles.some(item => item.id === article.id);

            if (exists) {
                state.articles = state.articles.filter(item => item.id !== article.id);
            } else {
                state.articles.push(article);
            }
        },
        clearHistory: (state, action) => {
            state.articles = [];
        }
    },
});

export const { toggleFavorite, clearHistory } = favoritesSlice.actions;
export default favoritesSlice.reducer;
