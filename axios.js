// GET REQUEST
function getTodos() {
    axios.get("https://jsonplaceholder.typicode.com/users" ,{timeout:10})
    .then(res=>showOutput(res))
    .catch(err=>console.log(err))
  }
  
  // POST REQUEST
  function addTodo() {
    axios.post("https://jsonplaceholder.typicode.com/users" , {name:"vimal" , username:"vimal123" , address:"Indore"})
    .then(res => showOutput(res))
    .catch(err=>console.log(err))
  }
  
  // PUT/PATCH REQUEST
  function updateTodo() {
    axios.put("https://jsonplaceholder.typicode.com/posts/1" , {name:"vimal" , username:"vimal123" , address:"Indore"})
    .then(res => showOutput(res))
    .catch(err=>console.log(err))
  }
  
  // DELETE REQUEST
  function removeTodo() {
    axios.delete("https://jsonplaceholder.typicode.com/posts/1")
    .then(res => showOutput(res))
    .catch(err=>console.log(err))
  }
  
  // SIMULTANEOUS DATA
  function getData() {
    axios.all([
        axios.get("https://jsonplaceholder.typicode.com/posts?_limit=3") , 
        axios.get("https://jsonplaceholder.typicode.com/comments?_limit=3")
    ])
    .then(res=>{console.log(res[0])
    console.log(res[1])})
    .catch(err=>console.log(err))
  }
  
  
  
  // INTERCEPTING REQUESTS & RESPONSES
  axios.interceptors.request.use(
    config => {console.log(`${config.method} request sent to ${config.url} at ${new Date()}`)
return config ; }
   
  )


  // set timeout 
  //axios.get("https://jsonplaceholder.typicode.com/comments" , {timeout:1000})
  
  
  // Show output in browser
  function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  
  // Event listeners
  document.getElementById('get').addEventListener('click', getTodos);
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);
  document.getElementById('sim').addEventListener('click', getData);
  
  
    