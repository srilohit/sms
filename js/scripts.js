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
        confirm_password: confirmPassword
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

    fetch(`http://localhost:1010/admin_Login/${email}/${password}`, {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(loginForm)
        })
    .then(res => res.json())
    .then(data => {
        console.log('login about', data);        
    })
    .catch(err => {
        console.error('Error:', err);
        alert('Login failed');
    });

    fetch('http://localhost:1010/get_All_admins', { method : 'get' })
    .then( res => res.json())
    .then( data => {
        data.filter( admin =>{
            if(admin.email === email && admin.password === password){
                alert('Login successful');
                window.location.href = 'index.html';
            }
            else{
                window.location.href = 'login.html';
            }
        });
    })
    .catch(err => 
        console.log('Data not sent', err)
    );
};

// Student Form data

const studentData = ()=>{
    const firstname = document.getElementById('userFirstName').value;
    const lastname = document.getElementById('userLastName').value;
    const dob = document.getElementById('userDob').value;
    const gender = document.getElementById('userGender').value;
    const fatherName = document.getElementById('userFatherName').value;
    const motherName = document.getElementById('userMotherName').value;
    const studentPhoto = document.getElementById('userImage').files[0];
    const studentClass = document.getElementById('userClass').value;
    const section = document.getElementById('userSection').value;
    const rollNumber = document.getElementById('userRollNumber').value;
    const admissionNumber = document.getElementById('userAdmitNumber').value;
    const joiningDate = document.getElementById('userJoiningDate').value;
    const nationality = document.getElementById('userNationality').value;
    const religion = document.getElementById('userReligion').value;
    const email = document.getElementById('userEmail').value;
    const phoneNumber = document.getElementById('userContactNumber').value;
    const address = document.getElementById('userAddress').value;
    const password = document.getElementById('userPassword').value;
    const confirmPassword = document.getElementById('userConfirmPassword').value;

    
    let studentForm = {
        firstName: firstname,
        lastName: lastname,
        dateOfBirth: dob,
        gender: gender,
        fatherName: fatherName,
        motherName: motherName,
        studentPhoto: studentPhoto?.name || "",
        studentClass: studentClass,
        section: section,
        rollNumber: rollNumber,
        admissionNumber: admissionNumber,
        joiningDate: joiningDate,
        nationality: nationality,
        religion: religion,
        email: email,
        mobileNumber: phoneNumber,
        address: address,
        password: password,
        confirmPassword: confirmPassword
    };
    console.log(studentForm);

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }
    
    fetch('http://localhost:1010/add_Student', {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(studentForm)
        })
    .then(res => res.json())
    .then(data => {
        console.log('Student data added:', data);
        alert('student data added: '+ JSON.stringify(data));
    })
    .catch(err => {
        console.error('Error:', err);
        alert('Registration failed');
    });
};



