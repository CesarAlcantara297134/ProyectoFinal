
window.onload = init;
var headers = {};
var url = "http://localhost:3000/employees"

function init() {
    if (localStorage.getItem("token")) {
        headers = {
            headers: {
                'Authorization': "bearer " + localStorage.getItem("token")
            }
        }
        document.querySelector('.btn-primary').addEventListener('click', loadEmployee);
        document.querySelector('.btn-secondary').addEventListener('click', function() {
            window.location.href = "empleados.html"
        });

        
    } else {
        window.location.href = "index.html";
    }
}

function loadEmployee() {
    axios.get(url + "/getall", headers).then(function(res) {
        console.log(res);
        displayEmployee(res.data.message)
        alert("Todos los empleados");
    }).catch(function(err) {
        console.log(err);
    })
}

function displayEmployee(employee) {
    var body = document.querySelector(".box");
    for (var i = 0; i < employee.length; i++) {
        var employeeHTML = `<h3 class="employee">${employee[i].id}.- ${employee[i].nombre} ${employee[i].apellido}</h3>`;
        body.innerHTML += employeeHTML;
    }
}