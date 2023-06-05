window.onload = init;
var url = "http://localhost:3000";
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

        document.querySelector('.btn-primary').addEventListener('click', addEmployee);
    } else {
        window.location.href = "index.html";
    }
}

function addEmployee() {
    var name = document.getElementById('input-name').value;
    var surname = document.getElementById('input-surname').value;
    var phone = document.getElementById('input-phone').value;
    var mail = document.getElementById('input-mail').value;
    var address = document.getElementById('input-address').value;
    const token = localStorage.getItem('token');
    axios({
        method: 'post',
        headers: {  
            Accept: 'application/json',
            'Content-Type': 'application/json',
             Authorization: `Bearer ${token}` 
          },
        url: 'http://localhost:3000/employees/add',
        data: {
            nombre: name,
            apellido: surname,
            telefono: phone,
            correo_electronico: mail, 
            direccion: address
        }
        
    }).then(function(res) {
        alert("Registro Exitoso");
        console.log(res);
    }).catch(function(err) {
        console.log(err);
    })
}