
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

        document.querySelector('.btn-primary').addEventListener('click', deleteEmployee);
    } else {
        window.location.href = "index.html";
    }
}

function deleteEmployee() {
    var id = document.getElementById('input-id').value;
    const token = localStorage.getItem('token');
    axios({
        method: 'delete',
        headers: {  
            Accept: 'application/json',
            'Content-Type': 'application/json',
             Authorization: `Bearer ${token}` 
          },
        url: 'http://localhost:3000/employees/delete',
        data: {
            id: id
        }
    }).then(function(res) {
        alert("Empleado eliminado correctamente");
        console.log(res);
    }).catch(function(err) {
        console.log(err);
    })
}