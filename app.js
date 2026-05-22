function generateBill(){

    let units = document.getElementById("units").value;

    let perUnit = 25;

    let bill = units * perUnit;

    let tax = bill * 0.17;

    let totalBill = bill + tax;

    document.getElementById("result").innerHTML =
    `
    Units Consumed: ${units} <br>
    Per Unit Price: Rs.${perUnit} <br>
    Bill Amount: Rs.${bill} <br>
    Tax (17%): Rs.${tax.toFixed(2)} <br><br>
    Total Bill: Rs.${totalBill.toFixed(2)}
    `;
}
