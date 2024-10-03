let menuIcon= document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

let sections= document.querySelectorAll('section');
let navLinks= document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+ ' ]').classList.add('active');
            })
        }
    })
}

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


const toggle = document.getElementById("toggleDark");
        const body = document.querySelector("body");

        toggle.addEventListener('click', () => {
            toggle.classList.toggle('fa-moon');
            toggle.classList.toggle('fa-sun');
            
            if (toggle.classList.contains('fa-sun')) {
                // Light mode
                body.classList.add("light");
                body.classList.remove("dark");

            } else {
                // Dark mode
               body.classList.add("dark");
               body.classList.remove("light");
            }
        });

        function data() {
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let phonenum = document.getElementById("phonenum").value;
            let message = document.getElementById("message").value;
            let subject = document.getElementById("subject").value;
        
            let nameerror = document.getElementById("nameerror");
            let emailerror = document.getElementById("emailerror"); 
            let phonenumerror = document.getElementById("phonenumerror");
        
        
            if (name === "" || email === "" || message === "" || phonenum === "" || subject === "") { 
                alert("All Fields Are Mandatory!");
                return false;
            } 
            else if (name.length <= 2 || name.length >= 30) {
                nameerror.innerText = "Username length must be between 3 and 30 characters";
                return false;
            }
            else if (!/^[A-Za-z._\-0-9]+@[A-Za-z]+\.[a-z]{2,4}$/.test(email)) {
                emailerror.innerText = "Please enter a valid email";
                return false;
            } 
            else if (phonenum.length != 10 ) {
                phonenumerror.innerText = "Enter a 10-digit number";
                return false; 
            }   
            else {
                alert("Data Submitted Successfully");
                return true;
            }
        }
        