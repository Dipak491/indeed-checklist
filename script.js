function addItem() {
    const checklist = document.getElementById('checklist');
    checklist.innerHTML = ''; // Clear the list

    const items = [
        { id: 'field1', label: 'DPU' },
        { id: 'field2', label: 'Reference ID' },
        { id: 'field3', label: 'Title' },
        { id: 'field4', label: 'Location' },
        { id: 'field5', label: 'Street Address' },
        { id: 'field6', label: 'Description' },
        { id: 'field7', label: 'Type' },
        { id: 'field8', label: 'Full Time Part-time / Permanent' },
        { id: 'field9', label: 'Published Date / Expiration Date' },
        { id: 'field10', label: 'Work Schedule' },
        { id: 'field11', label: 'Contact Email' },
        { id: 'field12', label: 'Benefits' },
        { id: 'field13', label: 'Type Intern / Ausbuild' }
    ];

    items.forEach(item => {
        const checkbox = document.getElementById(item.id);
        if (checkbox.checked) {
            const li = document.createElement('li');
            li.textContent = item.label;
            checklist.appendChild(li);
        }
    });

    resetFields();
}

function resetFields() {
    const items = [
        'field1', 'field2', 'field3', 'field4', 'field5', 'field6',
        'field7', 'field8', 'field9', 'field10', 'field11', 'field12', 'field13'
    ];

    items.forEach(id => {
        document.getElementById(id).checked = false;
    });
}
