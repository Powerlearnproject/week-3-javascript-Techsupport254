// JavaScript Fundamentals
let num1 = 10;
let num2 = 5;

function add() {
	return num1 + num2;
}

function subtract() {
	return num1 - num2;
}

function divide() {
	return num1 / num2;
}

function multiply() {
	return num1 * num2;
}

document.getElementById("addBtn").addEventListener("click", () => {
	console.log("Add:", add());
	document.getElementById("result").textContent = "Result: " + add();
});

document.getElementById("subtractBtn").addEventListener("click", () => {
	console.log("Subtract:", subtract());
	document.getElementById("result").textContent = "Result: " + subtract();
});

document.getElementById("divideBtn").addEventListener("click", () => {
	console.log("Divide:", divide());
	document.getElementById("result").textContent = "Result: " + divide();
});

document.getElementById("multiplyBtn").addEventListener("click", () => {
	console.log("Multiply:", multiply());
	document.getElementById("result").textContent = "Result: " + multiply();
});

// DOM Manipulation
document.getElementById("updateBtn").addEventListener("click", () => {
	const userInput = document.getElementById("userInput").value;
	document.getElementById("displayText").textContent = userInput;
});

// Chart.js
const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
	type: "line",
	data: {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [
			{
				label: "Monthly Sales",
				data: [65, 59, 80, 81, 56, 55, 40],
				borderColor: "rgba(75, 192, 192, 1)",
				borderWidth: 1,
				fill: false,
			},
		],
	},
	options: {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	},
});
