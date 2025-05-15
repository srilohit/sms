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

//Registration form data

let registerForm = {
    firstname: '',
    lastname: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
};

const registerData = ()=>{
    registerForm.firstname = document.getElementById('registerFirstName').value;
    registerForm.lastname = document.getElementById('registerLastName').value;
    registerForm.email = document.getElementById('registerEmail').value;
    registerForm.phoneNumber = document.getElementById('registerContactNumber').value;
    registerForm.password = document.getElementById('registerPassword').value;
    registerForm.confirmPassword = document.getElementById('registerConfirmPassword').value;

    console.log(registerForm);
};
