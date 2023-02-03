let myForm = document.getElementById('myForm') ; 
myForm.addEventListener("submit" , submitForm) ; 
let ul = document.getElementById("ul")





function submitForm(e){
    e.preventDefault() ;
    let amount = document.getElementById("amount").value ; 
    let type  = document.getElementById("type").value ; 
    let details = document.getElementById("details").value ; 
    let text = amount + " " + type +" " + details 

    //create button and then append them to li
let editBtn = document.createElement('button') ; 
editBtn.setAttribute('type' , 'button')
editBtn.setAttribute("id" , id)
editBtn.setAttribute("onclick" , "editFunction()")
editBtn.appendChild(document.createTextNode("Edit"))

let deleteBtn = document.createElement("button")
deleteBtn.setAttribute('type' , 'button')
deleteBtn.setAttribute("id" , "delete")
deleteBtn.setAttribute("onclick" , "deleteFunction()")
deleteBtn.appendChild(document.createTextNode("Delete"))

    

    


    //create li element
    let li = document.createElement('li') ; 
    li.setAttribute("id" , "li")
    li.appendChild(document.createTextNode(text)); 
    li.appendChild(editBtn)  //add edit button to li
    li.appendChild(deleteBtn)  //add delete button to li
    ul.appendChild(li)
createId() ;     
}
function editFunction(){
    let li = document.getElementById("edit").parentElement ; 
    console.log("edit")
    console.log(li)
}

function deleteFunction(){
    console.log("delete")
}

let id = 1 ;
function createId(){
   id++ ; 
   return id ; 
}