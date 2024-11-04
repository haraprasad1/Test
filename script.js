document.getElementById('add-employee-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;
    const department = document.getElementById('department').value;
    const salary = document.getElementById('salary').value;

    // Here you would typically send this data to your server
    console.log('Adding Employee:', { name, position, department, salary });

    document.getElementById('message').innerText = 'Employee added successfully!';
    this.reset();
});

document.getElementById('modify-employee-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const employeeId = document.getElementById('employee-id').value;
    const newName = document.getElementById('new-name').value;
    const newPosition = document.getElementById('new-position').value;
    const newDepartment = document.getElementById('new-department').value;
    const newSalary = document.getElementById('new-salary').value;

    // Here you would typically send this data to your server
    console.log('Modifying Employee ID:', employeeId, { newName, newPosition, newDepartment, newSalary });

    document.getElementById('message').innerText = 'Employee details updated successfully!';
    this.reset();
});
