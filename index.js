import data from "./assets/data.js";
import { menu } from "./assets/menu.js";
import { events } from "./assets/events.js";

/*CREATE THE PROMISE */
function getData() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if(data == null) {
        reject("Error, the information is null.");
      }

      resolve(data);
    },2000);
  });
}

/*USE THE PROMISE */
async function printData() {
  try {
    const bgColor = ["bg-primary", "bg-color-red", "bg-success", "bg-color-blue", "bg-color-orange"];

    const data = await getData();
    //console.log(data);
    const $taskUnfinished = document.querySelector(".task-unf");
    let taskHtml = "";

    data.tasks.forEach(({ id,title,description,priority,status, dueDate, createdDate}) => {
      taskHtml += `
      <div class="task-card rounded p-3 ${bgColor[Math.round(Math.random()*4)]}" draggable="true">
        <div class="card-body" id='${id}'>
          <h5 class="card-title">${title}</h5>
          <h6 class="card-subtitle mb-2">${priority}</h6>
          <p class="card-text">${description}</p>
          <h6 class="card-subtitle mb-2" style="font-size: 13px;">${createdDate}</h6>
          <hr/>
          <a href="#" class="card-link">View More</a>
        </div>
      </div>
      `;
    });

    //console.log(taskHtml)
    $taskUnfinished.innerHTML += taskHtml;

  } catch (error) {
    console.log(error);
  }
} 


document.addEventListener("DOMContentLoaded", () => {
  /*CONF MENU */
  menu();
  /*TASKS */
  printData();
  /*EVENTS DRAG AND DROP */
  setTimeout(() => {
    events();
  },2000);
});

