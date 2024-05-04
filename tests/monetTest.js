import { formatCurrency } from "../scripts/utils/money.js";
console.log('Testing- formatCurrency');
if (formatCurrency(0) === `0.00`) {
    console.log('Passed-0')
} else {
    console.log('Failed-0')
};

if (formatCurrency(2000.5) === `20.01`) {
    console.log('Passed-rounds up to the nearest code')
} else {
    console.log('Failed-rounds up to the nearest code')
};