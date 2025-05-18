/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

// Registration form data

const registerData = ()=>{
    const firstname = document.getElementById('registerFirstName').value;
    const lastname = document.getElementById('registerLastName').value;
    const email = document.getElementById('registerEmail').value;
    // const phoneNumber = document.getElementById('registerContactNumber').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;

    
    let registerForm = {
        first_name: firstname,
        last_name: lastname,
        email: email,
        // phoneNumber: phoneNumber,
        password: password,
        confirm_Password: confirmPassword
    };
    console.log(registerForm);
    
    fetch('http://Localhost:1010/register_Admine', {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(registerForm)
        })
    .then(res => res.json())
    .then(data => console.log('Admin added:', data))
    .catch(err => {
        console.error('Error:', err);
        alert('Registration failed');
    });
};

// Login functionality

const loginData = ()=>{
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    let loginForm = {
        email: email,
        password: password
    };

    console.log(loginForm);

    fetch(`http://Localhost:1010/admin_Login/${email}/${password}`, {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(loginForm)
        })
    .then(res => res.json())
    .then(data => {
        alert(data);
    })
    .catch(err => {
        console.error('Error:', err);
        alert('Login failed');
    });

    fetch('http://localhost:1010/get_All_admins', { method : 'get' })
    .then( data => {
        if(data.email === email && data.password === password){
            window.location.href = 'index.html';
        }
        else{
            alert('Login failed');
        };
    })
    .catch(err => 
        console.log('Data not sent', err)
    );
};



