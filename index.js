let title = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let splitRows = title.split("\n");
console.log(splitRows);
let numRow = splitRows.length;
const test = [];
for(i = 0; i < numRow; i++){
    test.push(splitRows[i].split(","));
}
console.log(test);

let numColumns = test[0].length;
let objectsArray = [];
for (let i = 1; i< test.length; i++ ){
    let csv = {};
    console.log(test[i]);
    for ( let j = 0; j < numColumns; j++){
    let header = (test[0][j]);
    let keys = header.toLowerCase()
    csv[keys] = test[i][j]
    console.log(keys);
    }
objectsArray.push(csv);
}
console.log(objectsArray);

let totalAge = 0;

for (let i = 0; i < objectsArray.length; i++){
    let age = objectsArray[i].age * 1
    console.log(age);
    totalAge += age;
    avgAge = totalAge / objectsArray.length
   
} console.log(avgAge);


let reverseCsv = [] // creates an array to store csv data in
let header = Object.keys(objectsArray[0]).join(",") // creates a header that is = the key names for the first row of the csv
reverseCsv.push(header)

for (let i = 0;  i< objectsArray.length; i++){ // loops through each row
    let values = Object.values(objectsArray[i]).join(",") // takes the value of the key of the index of that row and joins them together
    reverseCsv.push(values) // adds values to the reverse csv

    let finalCsv = reverseCsv.join("\\n") // joins all values to one line separated by \n"
console.log(finalCsv);
}
