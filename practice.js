
const btn = document.getElementById('btn');
const newInput = document.getElementById('new-input');
const newList = document.getElementById('new-list');

// Add task to the list - fuction
function addJob() {
    const newText = newInput.value;
    
    if (newText === '') {
        alert('Please enter a job');
        return;
    }
    
    const li = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = newText;

// delete button
const delBtn = document.createElement('button');
delBtn.textContent = 'Delete';
delBtn.classList.add('delete');

// Toggle complete
taskSpan.addEventListener('click', () => {
li.classList.toggle('completed');
});

// delete task
delBtn.addEventListener('click', () => {
li.remove();
});

li.appendChild(taskSpan);
li.appendChild(delBtn);
newList.appendChild(li);

// clear input field
newInput.value = '';
}

// event listener for Add button
btn.addEventListener('click', addJob);

