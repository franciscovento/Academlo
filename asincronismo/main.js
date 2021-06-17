const firstLine = () => {
    setTimeout(() => {
        console.log("Yo me estoy pintando desde la linea 1");
    }, 5000);
}

console.log("Yo me estoy pintando desde la linea 2");
console.log("Yo me estoy pintando desde la linea 3");

firstLine();

