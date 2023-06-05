
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

        document.querySelector('.btn-primary').addEventListener('click', updateEmployee);
    } else {
        window.location.href = "index.html";
    }
}

function updateEmployee() {
    var id = document.getElementById('input-id').value;
    var name = document.getElementById('input-name').value;
    var surname = document.getElementById('input-surname').value;
    var phone = document.getElementById('input-phone').value;
    var mail = document.getElementById('input-mail').value;
    var address = document.getElementById('input-address').value;
    const token = localStorage.getItem('token');
    axios({
        method: 'put',
        headers: {  
            Accept: 'application/json',
            'Content-Type': 'application/json',
             Authorization: `Bearer ${token}` 
          },
        url: 'http://localhost:3000/employees/update',
        data: {
            id: id,
            nombre: name,
            apellido: surname,
            telefono: phone,
            correo_electronico: mail, 
            direccion: address
        }
    }).then(function(res) {
        alert("Empleado actualizado correctamente");
        console.log(res);
    }).catch(function(err) {
        console.log(err);
    })
}