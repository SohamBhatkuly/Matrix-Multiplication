let form = document.getElementById('input');

form.addEventListener('input', (event) => {
    event.preventDefault();
    let rows = document.getElementById('rows').value;
    let columns = document.getElementById('columns').value;
    console.log(rows, columns);
    let root = document.getElementById('root');
    if (root) {
        root.innerHTML = ``;
    }
    else {
        root = document.createElement('div');
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
        let colEntry = document.createElement('div');
            colEntry.setAttribute('id', `${i+j}`);
            colEntry.innerHTML = `<input type="number" class="input-values"></input>`
            colEntry.style.border = "1px solid black";
            colEntry.style.margin = '2px';
            colEntry.style.borderRadius = "0.1rem"
            root.appendChild(colEntry);
        }
        // root.appendChild(rowEntry);
    }
    document.body.appendChild(root);
})
