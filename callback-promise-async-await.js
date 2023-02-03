const posts = [
    {title:"Post 1 " , body:"this is post 1" , createdAt: (new Date().getTime()/1000)},
    {title:"Post 2 " , body:"this is post 2" , createdAt: (new Date().getTime()/1000)}
] ;

function createPost(post,sec){
    
    setTimeout(()=>{
        posts.push(post);
           
    } , sec)
    console.log(sec)
   
}
function getPost(){
    setTimeout(()=>{
        let output = '' ; 
        posts.forEach((post)=>{
            let getTime =(new Date().getTime()/1000) ; 
            let seconds = getTime - post.createdAt ;
            output += `<li>${post.title} created ${seconds} seconds ago</li>`
        })
         
        document.body.innerHTML = output  ;
    } , 4000)
     
}

function create4thPost(post,sec){
    createPost(post,sec);
}

createPost({title:"Post 3" , body:"this is post 3 " , createdAt: (new Date().getTime()/1000)} , 2000) ; 
create4thPost({title:"Post 4" , body:"this is post 4 " , createdAt: (new Date().getTime()/1000)} , 3000)
getPost() 
console.log(posts)