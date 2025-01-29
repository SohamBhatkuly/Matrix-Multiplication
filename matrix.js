let form = document.getElementById('input');
let rows;
let columns;
form.addEventListener('input', (event) => {
    event.preventDefault();
    rows = document.getElementById('rows').value;
    columns = document.getElementById('columns').value;
    let displayGrid = document.querySelector('.display-grid');
    console.log(rows, columns);
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

    if (rows && columns) {
        root.style.display = "grid";
        root.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        root.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        root.style.columnGap = `1px`;
        root.style.width = "max-content";
        root.style.maxWidth = "900px";
        root.style.border = "1px solid black";
        root.style.borderRadius = "0.5rem";
        root.style.padding = "0.2rem";
    }

    // root.style.border= "1px solid black"
   

    for (let i = 0; i < rows; i++){
        // let rowEntry = document.createElement('div');
        // rowEntry.setAttribute('id', `${i}`);
        for (let j = 0; j < columns; j++){
        let colEntry = document.createElement('input');
            colEntry.setAttribute('id', `${i}-${j}`);
            colEntry.setAttribute('type', 'number');
          //  colEntry.innerHTML = `<input type="number" class="input-values" id="${i}-${j}"></input>`
            colEntry.style.border = "1px solid black";
            colEntry.style.margin = '2px';
            colEntry.style.borderRadius = "0.1rem"
            root.appendChild(colEntry);
        }
        // root.appendChild(rowEntry);
    }


    displayGrid.append(root);
})

let multiply = () => {
    // let val = document.getElementsByClassName('input-values').value;
    // console.log(Array.from(val));
    let arr1 = [];
    for (let i = 0; i < rows; i++){
              arr1[i] = []; 
        for (let j = 0; j < columns; j++){
            arr1[i][j] = parseFloat(document.getElementById(`${i}-${j}`).value);
            console.log(arr1[i][j]);
        }
    }
    // for (i = 0; i < rows; i++){
    //     for (j = 0; j < columns; j++){
    //         console.log(arr1[i][j]);
    //     }
    // }

}

let checkInp = () => {
    let submitbutton = document.querySelector('.submit-button');
let inp = document.querySelectorAll('.input-values');
    // console.log(inp)
    // console.log('Input values:', Array.from(inp).map(input => input.value)); 
    submitbutton.classList.toggle("active", Array.from(inp).every((input) => {
        return input.value.trim() !== "";
    }));

    if (submitbutton.classList.contains("active")) {
        multiply();
    } else {
        alert('Enter all values');
    }
};

