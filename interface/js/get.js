
window.onload = init;

function init() {
    if (localStorage.getItem("token")) {
        headers = {
            headers: {
                'Authorization': "bearer " + localStorage.getItem("token")
            }
        }
        document.querySelector('.btn-secondary').addEventListener('click', function() {
            window.location.href = "empleados.html"
        } );

        document.querySelector('.btn-primary').addEventListener('click', getEmployee);
    } else {
        window.location.href = "index.html";
    }
}

function getEmployee() {
    var name = document.getElementById('input-name').value;
    console.log(name);
    const token = localStorage.getItem('token');
    axios({
        method: 'get',
        headers: {  
            Accept: 'application/json',
            'Content-Type': 'application/json',
             Authorization: `Bearer ${token}` 
          },
        url: 'http://localhost:3000/employees/get',
        data: {
            nombre: name
        }
    }).then(function(res) {
        console.log(res);
        displayEmployee(res.data.message)
        alert("Empleado encontrado")
    }).catch(function(err) {
        console.log(err);
    })
}

function displayEmployee(employee) {
    var body = document.querySelector(".box");
    for (var i = 0; i < employee.length; i++) {
        body.innerHTML += `<h3 class="employee">${employee[i].nombre}</h3>`;
    }
}