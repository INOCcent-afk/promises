

const textBtn = document.querySelector("#getText");
const userBtn = document.querySelector("#getUsers");
const postBtn = document.querySelector("#getPosts");
const submitBtn = document.querySelector(".submit");

textBtn.addEventListener("click",getText);
userBtn.addEventListener("click", getUsers);
postBtn.addEventListener("click", getPosts);
submitBtn.addEventListener("click", addPost);

function getText() { 
    fetch('sample.txt')
    .then((res) => res.text())
    .then((data) => {  
    document.querySelector(".output").innerHTML = data;
    })
}

function getUsers() { 
    fetch('users.json')
    .then((res) => res.json())
    .then((data) => { 
        let output = '<h2 class="mb-4">Users</h2>';
        data.forEach( user => {
            output += `
            <ul class="list-group mb-3">
            <li class="list-group-item">ID: ${user.id}</li>
            <li class="list-group-item">Name: ${user.name}</li>
            <li class="list-group-item">Email: ${user.email}</li>
            </ul>
            `;
        });
      document.querySelector(".output").innerHTML = output;  
    })
};
function getPosts() { 
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        let output = "<h2 class='mb-4'>Posts</h2>"
        data.forEach(function(post) { 
            output += `
                <div class="card card-body mb-4>
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                </div>
            `
        })
        document.querySelector(".output").innerHTML = output;
    })
};


function addPost(e) { 
    e.preventDefault();

    let title = document.getElementById("title").value;
    let body = document.getElementById("body").value;

    fetch('http://jsonplaceholder.typicode.com/posts', { 
        method: 'Post',
        headers: {
            'Accept' : 'Application/json,text/plain, */*',
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({title: title , body:body})
    })
    .then((res) => res.json())
    .then((data) => { 
        console.log(data);
    })
}




