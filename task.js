Task_input = document.querySelector(".task");
tasklist = document.querySelector(".collection");
Clear = document.querySelector("#clear-task");
//add task
function addtask(e) {
  if (Task_input.value.trim() === '') {
    alert("input a task");
    return;
  }
  //create li
  const li = document.createElement("li");
  li.className = "collection-item";
  li.appendChild(document.createTextNode(Task_input.value))
  const link=document.createElement('a')
  link.className="deleteItem"
  link.innerHTML='<button class="delete">delete</button>'
  li.appendChild(link)
  tasklist.appendChild(li);
  Task_input.value = "";
  e.preventDefault();
}

//clear task
function cleartask() {
  tasklist.innerHTML = "";
}
//delete task
function deletetask(e){
  if (e.target.parentElement.classList.contains('deleteItem')){
        if(confirm('are you sure?')){
          e.target.parentElement.parentElement.remove() 
        }}}
        tasklist.addEventListener('click',deletetask)