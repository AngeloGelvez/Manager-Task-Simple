export function events() {
  const lists = document.querySelectorAll(".task-card");
  const $unfinishedBlock = document.getElementById("unfinished");
  const $progressBlock = document.getElementById("progress");
  const $finishedBlock = document.getElementById("finished");

  for (const list of lists) {
    list.addEventListener("dragstart", e => {
      let selected = list;


      $unfinishedBlock.addEventListener("dragover" , e => {
        e.preventDefault();
      });

      $unfinishedBlock.addEventListener("drop", e => {
        $unfinishedBlock.appendChild(selected);
        selected = null;
      });

      $progressBlock.addEventListener("dragover" , e => {
        e.preventDefault();
      });

      $progressBlock.addEventListener("drop", e => {
        $progressBlock.appendChild(selected);
        selected = null;
      });

      $finishedBlock.addEventListener("dragover" , e => {
        e.preventDefault();
      });

      $finishedBlock.addEventListener("drop", e => {
        $finishedBlock.appendChild(selected);
        selected = null;
      });
    });

    
  }
}