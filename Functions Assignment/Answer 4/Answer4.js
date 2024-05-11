function calculateTax() {
    // Define tax brackets and rates using closure
    const taxBrackets = [
        { minIncome: 0, maxIncome: 10000, rate: 0.1 },
        { minIncome: 10001, maxIncome: 50000, rate: 0.2 },
        { minIncome: 50001, maxIncome: 100000, rate: 0.3 },
        { minIncome: 100001, maxIncome: Infinity, rate: 0.4 }
    ];

    // Inner function to calculate tax based on income
    return function(income) {
        let tax = 0;
        for (const bracket of taxBrackets) {
            if (income > bracket.minIncome) {
                const taxableAmount = Math.min(income, bracket.maxIncome) - bracket.minIncome;
                tax += taxableAmount * bracket.rate;
            }
        }
        return tax;
    };
}

// Create a tax calculator
const taxCalculator = calculateTax();

// Test the function with various incomes
const incomes = [5000, 15000, 60000, 120000];
incomes.forEach(income => {
    const taxAmount = taxCalculator(income);
    console.log(`For an income of $${income}, the tax to be paid is $${taxAmount.toFixed(2)}.`);
});
