//  email,password ,request backend=> reply
let d = document;
let loginBtn = d.querySelector(".login-button");
let signupForm = d.querySelector(".signup");

async function loginHelper(email, password) {
  const response = await axios.post("/api/users/login", {
    email, password
  })
  if (response.data.status == "successfull") {
    alert("Login Successfull")
  } else {
    alert("Try again");
  }
}
async function signupHelper(email, password, confirmPassword, name) {
  const response = await axios.post("/api/users/signup", {
    email, password, confirmPassword, name
  });
  console.log(response.data);
}
if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = d.querySelector(".email").value;
    const password = d.querySelector(".password").value
    const confirmPassword = d.querySelector(".confirmPassword").value;
    const name = d.querySelector(".name").value;
    signupHelper(email, password, confirmPassword, name);
  })
}

if (loginBtn) {
  loginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let email = d.querySelector("input[type=email]").value;
    let password = d.querySelector("input[type=password]").value;
    loginHelper(email, password)
  })
}
