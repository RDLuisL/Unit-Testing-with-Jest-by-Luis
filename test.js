// import the sum function from app.js file 
/*const { sum } = require('./app.js');

// begin your first test
test('adds 10 + 9 to equal 23', () => {
    //use tu numbers with sum function
    let total = sum(14, 9);

    // we experct that the solve function is 19
    expect(total).toBe(23);
});*/
test("One euro must be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js'
    // test
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro is 1.2 USD, them 3.5 euros must be = (3.5 * 1.2)
})

test("5 USD are 532.9166666666667 yen ", function(){
    const { fromDollarToYen} = require('./app.js') 
    // test
    expect(fromDollarToYen(5)).toBe(532.9166666666667); 
})


test("1000 yen son 6.254886630179827pound ", function(){ 
    const { formYenToPound} = require('./app.js')
    // test
    expect(formYenToPound(1000)).toBe(6.254886630179827); 
})