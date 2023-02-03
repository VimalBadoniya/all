 
document.getElementById("myForm").addEventListener("submit" , addProduct) ; 

let key = 0 ;
function getKey(){
    key++ ; 
    return key ; 
}

let Total = 0 ;


function addProduct(e){
    e.preventDefault() ; 
    getKey() ;
    let prodId = document.getElementById("id").value ; 
    let prodPrice = document.getElementById("price").value ;
    let prodName = document.getElementById("name").value ;
    let text = prodId + " " + prodPrice + " " + prodName ; 

    let button =  document.createElement("button") ;
    button.setAttribute("type" , "button") ; 
    button.setAttribute("id" , key) ;
    button.appendChild(document.createTextNode("Delete")) 
    button.addEventListener("click" , printKey) ; 
    
    function printKey(){
    
        p.innerHTML = Total - parseInt(JSON.parse(localStorage.getItem(this.id)).Price)
        let deleteLi = document.getElementById(this.id).parentElement ; 
        document.getElementById("ul").removeChild(deleteLi)
        //localStorage.removeItem(this.id)
        console.log(this.id , "deleted")
        
    }
    


    let myObj = {Id:prodId , Price : prodPrice , Name : prodName} ; 
    let myObjtoString = JSON.stringify(myObj) ; 
    



    let li = document.createElement("li") ; 
    li.appendChild(document.createTextNode(text)) ;
    li.appendChild(button) 
    document.getElementById("ul").appendChild(li)
    localStorage.setItem(key , myObjtoString)
     
    grandtotal();
    function grandtotal(){
        Total =Total+ parseInt(prodPrice) ; 
        return Total ;
        }
    let p = document.getElementById("total") ; 
    p.innerHTML= Total ;
}

   