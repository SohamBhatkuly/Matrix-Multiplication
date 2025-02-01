let form = document.getElementById('input');
let rows;
let columns;
let rows2;
let columns2;
let arr1 = [];
let arr2 = [];
let form2 = document.getElementById('input2');
let arr3 = [];

form.addEventListener('input', (event) => {
    event.preventDefault();
    rows = document.getElementById('rows').value;
    columns = document.getElementById('columns').value;
    let displayGrid = document.querySelector('.display-grid');
    // console.log(rows, columns);
    let root = document.getElementById('root');
    if (root) {
        root.innerHTML = ``;
    }
    else {
        root = document.createElement('form');
        root.setAttribute('id', 'root');
        root.innerHTML = ``;
        root.setAttribute('class', 'root');
    }

    if (rows>0 && columns>0) {
        root.style.display = "grid";
        root.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        root.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        root.style.columnGap = `1px`;
        root.style.width = "max-content";
        root.style.maxWidth = "900px";
        // root.style.border = "1px solid black";
        root.style.borderRadius = "0.5rem";
        root.style.padding = "0.2rem";
        root.style.backgroundColor = "#E0E0E0 "
        root.style.marginBottom = "1rem";
        // root.style.color="  color: #2c3e50"
    }

    // root.style.border= "1px solid black"
   

    for (let i = 0; i < rows; i++){
        // let rowEntry = document.createElement('div');
        // rowEntry.setAttribute('id', `${i}`);
        for (let j = 0; j < columns; j++){
        let colEntry = document.createElement('input');
            colEntry.setAttribute('id', `${i}-${j}`);
            colEntry.setAttribute('type', 'number');
            colEntry.setAttribute('class', 'cells');
            colEntry.style.backgroundColor = "#FFFFFF ";
          //  colEntry.innerHTML = `<input type="number" class="input-values" id="${i}-${j}"></input>`
            // colEntry.style.border = "1px solid black";
            colEntry.style.margin = '2px';
            colEntry.style.borderRadius = "0.1rem"
            colEntry.style.outline = "none";
            colEntry.style.color="#2c3e50"
            root.appendChild(colEntry);
        }
        // root.appendChild(rowEntry);
    }


    displayGrid.append(root);
})



form2.addEventListener('input', (event) => {
    event.preventDefault();
    rows2 = document.getElementById('rows2').value;
    columns2 = document.getElementById('columns2').value;
    let displayGrid2 = document.querySelector('.display-grid2');
    // console.log(rows, columns);
    let root2 = document.getElementById('root2');
    if (root2) {
        root2.innerHTML = ``;
    }
    else {
        root2 = document.createElement('form');
        root2.setAttribute('id', 'root2');
        root2.innerHTML = ``;
        root2.setAttribute('class', 'root2');
    }

    if (rows2>0 && columns2>0) {
        root2.style.display = "grid";
        root2.style.gridTemplateColumns = `repeat(${columns2}, 1fr)`;
        root2.style.gridTemplateRows = `repeat(${rows2}, 1fr)`;
        root2.style.columnGap = `1px`;
        root2.style.width = "max-content";
        root2.style.maxWidth = "900px";
        // root.style.border = "1px solid black";
        root2.style.borderRadius = "0.5rem";
        root2.style.padding = "0.2rem";
        root2.style.backgroundColor = "#E0E0E0 "
        root2.style.marginBottom = "1rem";
        // root.style.color="  color: #2c3e50"
    }

    // root.style.border= "1px solid black"
   

    for (let i = 0; i < rows2; i++){
        // let rowEntry = document.createElement('div');
        // rowEntry.setAttribute('id', `${i}`);
        for (let j = 0; j < columns2; j++){
        let colEntry2 = document.createElement('input');
            colEntry2.setAttribute('id', `${i}-${j}-2`);
            colEntry2.setAttribute('type', 'number');
            colEntry2.setAttribute('class', 'cells');
            colEntry2.style.backgroundColor = "#FFFFFF ";
          //  colEntry.innerHTML = `<input type="number" class="input-values" id="${i}-${j}"></input>`
            // colEntry.style.border = "1px solid black";
            colEntry2.style.margin = '2px';
            colEntry2.style.borderRadius = "0.1rem"
            colEntry2.style.outline = "none";
            colEntry2.style.color="#2c3e50"
            root2.appendChild(colEntry2);
        }
        // root.appendChild(rowEntry);
    }
    displayGrid2.append(root2);
})


let multiply = () => {

        for (let i = 0; i < rows; i++) {
                    arr3[i] = [];
            for (let j = 0; j < columns2; j++) {
                arr3[i][j] = 0;
                    for (let k = 0; k < columns; k++) {
                arr3[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }

    let bodyDisplay2 = document.querySelector('.body-display');
    bodyDisplay2.innerHTML = ``;
    bodyDisplay2.style.flexDirection = "column";
    let mul = document.createElement('div');
    mul.innerHTML = "<h2>Multiplication Result</h2>";
    mul.style.justifyContent = "start";
    mul.style
    bodyDisplay2.appendChild(mul);

    let result = document.createElement('div');
    result.style.display = "grid";
        result.style.gridTemplateColumns = `repeat(${columns2}, 1fr)`;
        result.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        result.style.columnGap = `1px`;
        result.style.width = "max-content";
        result.style.maxWidth = "900px";
        result.style.borderRadius = "0.5rem";
        result.style.padding = "0.2rem";
        result.style.backgroundColor = "#E0E0E0 "
    result.style.margin = "1rem";
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns2; j++) {
            let colEntry3 = document.createElement('div');
            colEntry3.setAttribute('id', `${i}-${j}-r`);
            colEntry3.setAttribute('type', 'number');
            colEntry3.setAttribute('class', 'cells');
            colEntry3.style.backgroundColor = "#FFFFFF ";
            //  colEntry.innerHTML = `<input type="number" class="input-values" id="${i}-${j}"></input>`
            // colEntry.style.border = "1px solid black";
            colEntry3.style.margin = '2px';
            colEntry3.style.borderRadius = "0.1rem"
            colEntry3.style.outline = "none";
            colEntry3.style.color = "#2c3e50"
            colEntry3.style.width = "3rem";
            colEntry3.innerText = `${arr3[i][j]}`
            result.appendChild(colEntry3);
            colEntry3.style.textAlign = "center";
        }
    }
    //  bodyDisplay2.innerHTML = ""; // Clear previous content
    bodyDisplay2.appendChild(result);
    bodyDisplay2.classList.add('res');
}
let matrixInput = () => {
    // let val = document.getElementsByClassName('input-values').value;
    // console.log(Array.from(val));
    for (let i = 0; i < rows; i++){
              arr1[i] = []; 
        for (let j = 0; j < columns; j++){
            arr1[i][j] = parseFloat(document.getElementById(`${i}-${j}`).value);
            console.log(arr1[i][j]);
        }
    }

        for (let i = 0; i < rows2; i++){
              arr2[i] = []; 
        for (let j = 0; j < columns2; j++){
            arr2[i][j] = parseFloat(document.getElementById(`${i}-${j}-2`).value);
            console.log(arr2[i][j]);
        }
    }

    multiply();

}

let checkInp = () => {
    
    if (columns != rows2) {
        alert('Provide matrices of proper order to multiply');
        return;
    }
    let submitbutton = document.querySelector('.submit-button');
    let inp = document.querySelectorAll('.cells');
    // console.log(inp)
    // console.log('Input values:', Array.from(inp).map(input => input.value)); 
    submitbutton.classList.toggle("active", Array.from(inp).every((input) => {
        return input.value.trim() !== "";
    }));


    if (submitbutton.classList.contains("active")) {
        matrixInput();
    } else {
        alert('Enter all values');
    }
};

