let form = document.getElementById('input');
form.addEventListener('input', (event) => {
    event.preventDefault();
    let rows = document.getElementById('rows').value;
    let columns = document.getElementById('columns').value;
    console.log(rows, columns);
    let root = document.createElement('div');
    root.setAttribute('id', 'root');
        root.setAttribute('class', 'root');
    for (let i = 0; i < rows; i++){
        let rowEntry = document.createElement('div');
        rowEntry.setAttribute('id', `${i}`);
        for (let j = 0; j < columns; j++){
        let colEntry = document.createElement('div');
            colEntry.setAttribute('id', `${j}`);
            rowEntry.appendChild(colEntry);
        }
        root.appendChild(rowEntry);
    }
    document.body.appendChild(root);
})
