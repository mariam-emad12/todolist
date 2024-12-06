window.addEventListener("load",function(){
    local=JSON.parse(localStorage.getItem("Tasks"))||[];
    const form=document.querySelector("form");
 task_input=document.getElementsByClassName('form input')[0];
 
    form.addEventListener("submit", function(e){
        e.preventDefault();
       const todo = {
            task: e.target.elements.task.value
            
        }
     if(!e.target.elements.task.value){
        alert("Fill the input first");
     }
     else{
        local.push(todo);
        localStorage.setItem("Tasks", JSON.stringify(local));
     }
     e.target.reset();
     
     displayTasks();
    })
    
    
});
    
function displayTasks() {
    const list_tasks =document.querySelector("#tasks");
    list_tasks.innerHTML ="";
    local.forEach((todo) => {
        list_tasks.innerHTML +=`<div class="row mb-2">
        <div class="col-10">
            <input class="col-12 py-1 bg-dark text-light" type="text" value="${todo.task}" readonly/>

        </div>
        <div class="col-lg-2">
            <div class="row justify-content-around">
                <button class="btn btn-success edit col-lg-5 col-4 p-1">Edit</button>
                <button class="btn btn-danger delete col-lg-5 col-4 p-1">Delete</button>
            </div>
        </div>
        
        
    </div> 
    `;
   


    //edit

      edit_btn=document.querySelectorAll(".edit");
      edit_input=document.querySelectorAll("#tasks input");
      edit_btn.forEach((edt,i)=>{
        edt.addEventListener("click", function(){
            if(edt.innerText=="Edit"){
                  edt.innerText="update";
                  edit_input[i].removeAttribute("readonly");
            }
            else{
                edt.innerText="Edit";
                edit_input[i].setAttribute("readonly","readonly");
                local[i].task=edit_input[i].value;
                localStorage.setItem("Tasks", JSON.stringify(local));
            }
        
        });
    });
        //delete button

          let delete_btn=document.querySelectorAll(".delete");
 

           delete_btn.forEach((del,i) => {
           del.addEventListener("click",function(){
           local.splice(i,1);
            localStorage.setItem("Tasks", JSON.stringify(local));
            displayTasks();
           });
          
        });
    });



};
