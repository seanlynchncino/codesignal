// https://app.codesignal.com/challenge/QbAFyBmzZec3aD6EZ
const whereToGather = travelCosts => {
    let travelCostsTransposed = travelCosts.map((col, i) => travelCosts.map(row => row[i]));
    let travelCostsFiltered = travelCostsTransposed.filter(row => !row.includes(-1));
    let travelCostsTotals = travelCostsFiltered.map(row => row.reduce((acc, val) => acc + val, 0))
    return travelCostsTotals.length ? Math.min(...travelCostsTotals) : -1;
}
