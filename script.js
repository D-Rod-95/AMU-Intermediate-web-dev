function calculateTotal() {
    let total = 0;
    const costs = document.querySelectorAll('input[type="number"]');
    costs.forEach(function(cost) {
        total += parseFloat(cost.value) || 0;
    });
    document.getElementById("total").innerText = "Total: $" + total.toFixed(2);
}

function addRow() {
    const table = document.getElementById("expenseTable").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    
    const newItemCell = newRow.insertCell(0);
    const newItemInput = document.createElement("input");
    newItemInput.type = "text";
    newItemCell.appendChild(newItemInput);
    
    const newCostCell = newRow.insertCell(1);
    const newCostInput = document.createElement("input");
    newCostInput.type = "number";
    newCostCell.appendChild(newCostInput);
    
    const newCategoryCell = newRow.insertCell(2);
    const newCategoryInput = document.createElement("input");
    newCategoryInput.type = "text";
    newCategoryCell.appendChild(newCategoryInput);
}
