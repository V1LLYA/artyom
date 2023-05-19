const symbols = ["d1", "d2", "p1", "p2"];

function getRandomColor() {
    const letters = '89ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

function getTestSymbols() {
    let remainingD2 = 0;
    const testSymbols = [];
    for (let row = 0; row < 10; row++) {
        const rowSymbols = [];
        for (let col = 0; col < 10; col++) {
            const symbol = symbols[Math.floor(Math.random() * symbols.length)];
            if (symbol === "d2") {
                remainingD2++;
            }
            rowSymbols.push({ symbol, color: getRandomColor() });
        }
        testSymbols.push(rowSymbols);
    }
    return { testSymbols, remainingD2 };
}

export { getTestSymbols };