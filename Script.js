let list = document.getElementById("list");

function addTask() {
  let task = document.getElementById("task").value;
  if(task=="") return;

  let li = document.createElement("li");
  li.innerText = task;

  li.onclick = () => li.classList.toggle("done");

  let del = document.createElement("button");
  del.innerText = "X";
  del.onclick = () => { li.remove(); save(); };

  li.appendChild(del);
  list.appendChild(li);

  save();
}

function save() {
  let tasks = [];
  document.querySelectorAll("li").forEach(li => {
    tasks.push({text: li.firstChild.textContent, done: li.classList.contains("done")});
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function load() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(t => {
    let li = document.createElement("li");
    li.textContent = t.text;
    if(t.done) li.classList.add("done");
    li.onclick = () => li.classList.toggle("done");

    let del = document.createElement("button");
    del.textContent = "X";
    del.onclick = () => { li.remove(); save(); };

    li.appendChild(del);
    list.appendChild(li);
  });
}
load();
