import { formatCurrency } from "../../scripts/utils/money.js"

describe('Test suit: FormatCurrency', () => {
    it ('Converts cents into dollars', () => {
        expect(formatCurrency(2095)).toEqual('20.95');
    });

    it ('Work with 0', () => {
        expect(formatCurrency(0)).toEqual('0.00');
    });

    it ('Round up in the nearest Cents', () => {
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });
});