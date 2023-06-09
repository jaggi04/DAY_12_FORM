const form = document.getElementById('myForm');
const table = document.getElementById('myTable');
const tbody = table.querySelector('tbody');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const firstName = form.elements['firstName'].value;
	const lastName = form.elements['lastName'].value;
	const address = form.elements['address'].value;
	const pincode = form.elements['pincode'].value;
	const gender = form.elements['gender'].value;
	const food = [...form.elements['food']].filter((option) => option.selected).map((option) => option.value);
	const state = form.elements['state'].value;
	const country = form.elements['country'].value;

	const row = document.createElement('tr');
	const firstNameCell = document.createElement('td');
	const lastNameCell = document.createElement('td');
	const addressCell = document.createElement('td');
	const pincodeCell = document.createElement('td');
	const genderCell = document.createElement('td');
	const foodCell = document.createElement('td');
	const stateCell = document.createElement('td');
	const countryCell = document.createElement('td');

	firstNameCell.textContent = firstName;
	lastNameCell.textContent = lastName;
	addressCell.textContent = address;
	pincodeCell.textContent = pincode;
	genderCell.textContent = gender;
	foodCell.textContent = food.join(', ');
	stateCell.textContent = state;
	countryCell.textContent = country;

	row.appendChild(firstNameCell);
	row.appendChild(lastNameCell);
	row.appendChild(addressCell);
	row.appendChild(pincodeCell);
	row.appendChild(genderCell);
	row.appendChild(foodCell);
	row.appendChild(stateCell);
	row.appendChild(countryCell);

	tbody.appendChild(row);

	form.reset();
});
