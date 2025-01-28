let form = document.getElementById('input');
form.addEventListener('input', (event) => {
    event.preventDefault();
    let rows = document.getElementById('rows').value;
    let columns = document.getElementById('columns').value;

    console.log(rows, columns);
})
