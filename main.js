// Top for '': When we save and refresh the page, they stay there or reload the page 
//-> windows or browsers local storage 
//window.localStorage.setItem
// to load the pase we use window.addEventListener
window.addEventListener("load", () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const listEl = document.querySelector("#tasks");

	//form.addEventListener for submit form 
	form.addEventListener("submit", (e) => {
		//e.preventDefault stops it from refreshing the page
		e.preventDefault();
		// to get the task
		const task = input.value;
		/*
		if (!task) {
			aler("Don't forget fill out your daily task");
			return;
		} */

		// To create div for task elements
		const taskEl = document.createElement("div");
		taskEl.classList.add("task");
		// To create div for task content with class
		const taskContentEl = document.createElement("div");
		taskContentEl.classList.add("content");

		//to get task
		//taskContentEl.innerText = task;

		//Add to taskEl the taskContentEl like child element -> listEl
		taskEl.appendChild(taskContentEl);

		//to create/input task
		const taskInputEl = document.createElement("input");
		taskInputEl.classList.add("text");
		taskInputEl.type = "text";
		taskInputEl.value = task;
		taskInputEl.setAttribute("readonly", "readonly");

		taskContentEl.appendChild(taskInputEl);

		//To activate
		const taskActionsEl = document.createElement("div");
		taskActionsEl.classList.add("actions");

		//To edit element
		const taskEditEl = document.createElement("button");
		taskEditEl.classList.add("edit");
		taskEditEl.innerText = "Edit";
		//To delete element
		const taskDeleteEl = document.createElement("button");
		taskDeleteEl.classList.add("delete");
		taskDeleteEl.innerText = "Delete";

		taskActionsEl.appendChild(taskEditEl);
		taskActionsEl.appendChild(taskDeleteEl);

		taskEl.appendChild(taskActionsEl);
		// Add to listEl the taskEl as child element
		listEl.appendChild(taskEl);
		//For input value
		input.value = "";
		//eventListener for task edit element
		taskEditEl.addEventListener("click", (e) => {
			if (taskEditEl.innerText.toLowerCase() == "edit") {
				taskEditEl.innerText = "Save";
				taskInputEl.removeAttribute("readonly");
				taskInputEl.focus();
			} else {
				taskEditEl.innerText = "Edit";
				taskInputEl.setAttribute("readonly", "readonly");
			}
		});
		//eventListener for task delete element
		taskDeleteEl.addEventListener("click", (e) => {
			listEl.removeChild(taskEl);
		});
	});
});
