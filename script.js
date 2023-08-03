
var submit = document.getElementById('add-word')

submit.addEventListener('click', () => {
    var writtenTask = document.getElementById('new-word').value;
    var addTasks = document.createElement('li');
    var AllTasks = document.getElementById('tasks');

    addTasks.innerHTML = '<input type="CheckBox"> ' + writtenTask + ' <button>Delete</button> <br><br>';
    AllTasks.appendChild(addTasks);

    var btn = addTasks.querySelector('button')

    btn.addEventListener('click', function() {
        AllTasks.removeChild(addTasks);
    });

    var tickBox = addTasks.querySelector('input[type="CheckBox"]')

    tickBox.addEventListener('change', function(event) {
        if (event.target.checked) {
            addTasks.style.textDecoration = 'line-through';
            AllTasks.appendChild(addTasks); 
        } else {
            addTasks.style.textDecoration = 'none';
        }
    });

    document.getElementById('new-word').value = '';
});
