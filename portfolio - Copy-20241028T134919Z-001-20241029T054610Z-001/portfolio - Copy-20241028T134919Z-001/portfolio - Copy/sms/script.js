document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    const li = document.createElement('li');
    li.textContent = `${name} (Age: ${age})`;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
        li.remove();
    };
    
    li.appendChild(deleteBtn);
    document.getElementById('studentList').appendChild(li);

    this.reset();
});
