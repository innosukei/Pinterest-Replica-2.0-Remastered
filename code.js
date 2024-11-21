const email = document.getElementById("email-field");
const password = document.getElementById("password-field");
const birthdate = document.getElementById("birthdate");

const correctpassword = "password123";
const correctemail = "user@example.com";

const notification_dropdown = document.getElementById("drop_down_content")
const notification_button = document.getElementById("notification_button")

function checkCredential() {
    // if (email.value===correctemail) {
    //     alert("email yang anda masukan benar")
    // }
    // else {
    //     alert("email yang anda masukan salah")
    // }


    // if (password.value===correctpassword) {
    //     alert("password yang anda masukan benar")
    // }
    // else {
    //     alert("password yang anda masukan salah")
    // }

    if ((email.value === correctemail) && (password.value === correctpassword)) {
        alert("Login successful")
        window.location.href = "./home page.html";
    }
    else {
        alert("Login failed")
        email.classList.add("input_failed")
        password.classList.add("input_failed")
    }
}

notification_button.onclick = show_dropdown;
var status1 = "hidden"

function show_dropdown() {
    if (status1 === "hidden"){
        notification_dropdown.classList.remove("notification_dropdown");
        notification_dropdown.classList.add("notification_dropdown_expanded")
        status1 = "show"
        alert ("aaaaaaaaaaaaaaaaaaa")
    }

    else if (status1 === "show"){
        notification_dropdown.classList.remove("notification_dropdown_expanded")
        notification_dropdown.classList.add("notification_dropdown");
        status1 = "hidden"
    }
}


