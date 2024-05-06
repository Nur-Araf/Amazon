import { addToCart, cart, loadFromStorage } from "../../data/card.js";

describe('Test suite: addToCart', () => {
    beforeEach(() => {
        // Reset the cart and localStorage before each test
        cart.length = 0;
        localStorage.clear();
    });

    it('adds an existing product to the cart', () => {
        
    });

    it('adds a new product to the cart', () => {
        // Mock localStorage.setItem
        spyOn(localStorage, 'setItem');

        // Mock localStorage.getItem to return an empty cart
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([]);
        });

        // Load the empty cart from storage
        loadFromStorage();

        // Add a new product to the cart
        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');

        // Assert that the cart has one item and localStorage.setItem was called
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    });
});
