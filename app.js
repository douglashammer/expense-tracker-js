const table = document.querySelector('table');
const form = document.querySelector('form');
const tbody = document.querySelector('tbody');

// create new table row containing expense input
function addExpense(e) {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const date = document.querySelector('#date').value;
  const amount = document.querySelector('#amount').value;

  const template = `
    <tbody>
    <tr>
    <td>${name}</td>
    <td>${date}</td>
    <td>${amount}</td>
    <td>
    <input type="image" src="https://www.dictionary.com/e/wp-content/uploads/2018/05/cross-mark.png" 
    class="deleteBtn" style="width: 20px;">
    </input>
    </td>
    </tr>
    </tbody>
    `;

  tbody.innerHTML += template;
  form.reset();
}

// delete row in expense table
function deleteRow(e) {
  if (!e.target.classList.contains('deleteBtn')) {
    return;
  }
  e.target.closest('tr').remove();
}

// runs functions for add and remove clicks
form.addEventListener('submit', addExpense);
table.addEventListener('click', deleteRow);

// calculate total expenses
const totalBtn = document.querySelector('#totalbtn');

function calculateTotal(e) {
  const totalEl = document.querySelector('span');

  var numUSD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })

  var total = 0;
  for (var i = 1; i < table.rows.length; i++) {
    var amountVals = parseFloat(table.rows[i].cells[2].innerHTML);
    total += amountVals;
  }
  const template = `
    <span>Total: ${numUSD.format(total)} &#128550</span>
    `;

  totalEl.innerHTML += template;
}

// runs calculate total function on click
totalBtn.addEventListener('click', e => {
  const totalEl = document.querySelector('span');

  if ('click') {
    totalEl.innerHTML = '';
    calculateTotal();
  }
});




