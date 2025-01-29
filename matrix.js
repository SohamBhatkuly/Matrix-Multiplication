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
    root.style.display = "grid";
    root.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    root.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    // root.style.border= "1px solid black"

    for (let i = 0; i < rows; i++){
        // let rowEntry = document.createElement('div');
        // rowEntry.setAttribute('id', `${i}`);
        for (let j = 0; j < columns; j++){
        let colEntry = document.createElement('div');
            colEntry.setAttribute('id', `${j}`);
            colEntry.innerHTML=`<input type="number"></input>`
            root.appendChild(colEntry);
        }
        // root.appendChild(rowEntry);
    }
    document.body.appendChild(root);
})
