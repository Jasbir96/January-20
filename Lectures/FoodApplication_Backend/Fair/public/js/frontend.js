//  email,password ,request backend=> reply
let d = document;
let loginBtn = d.querySelector(".login-button");
let signupForm = d.querySelector(".signup");
let logoutBtn = d.querySelector(".logout");
let forgetForm = d.querySelector(".forgetPassword");
let resetPasswordForm = d.querySelector(".resetPassword");
let updateProfile = d.querySelector(".updateProfile");

async function loginHelper(email, password) {
  const response = await axios.post("/api/users/login", {
    email, password
  })
  console.log(response.data);
  if (response.data.status == "successfull") {
    alert("Login Successfull")
    location.assign("/profilePage");
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
async function logoutHelper() {
  let response = await axios.get("/api/users/logout");
  if (response.data.status === "logged Out") {
    location.assign("/");
  } else {
    alert("some error ocurred");
  }
}
async function forgetPasswordHelper(email) {
  const response = await axios.patch("/api/users/forgetPassword", { email });
  if (response.data.status) {
    alert("Email Send to user");
  }
}
async function resetPasswordHelper(password, confirmPassword, resetToken) {
  const response = await axios.patch(`/api/users/resetPassword/${resetToken}`,
    {
      password, confirmPassword
    })
  if (response.data.success == "user password updated login with new password") {
    alert("Your password has been reset");
    location.assign("/login");
  } else {
    alert("something wnet wrong")
  }
}
async function updateProfileHelper(formData) {
  let response = await axios.patch("/api/users/updateProfile", formData);
  if (response.data.success) {
    alert("profile Image uploaded")
    location.reload();
  }
}
if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    // form reload 
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

if (logoutBtn) {
  logoutBtn.addEventListener("click", function (e) {
    // /api/users/logout
    e.preventDefault();
    logoutHelper();
  })
}
if (forgetForm) {
  forgetForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let email = d.querySelector(".email").value;
    forgetPasswordHelper(email);

  })
}

if (resetPasswordForm) {
  resetPasswordForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let password = d.querySelector(".password").value;
    let confirmPassword = d.querySelector(".confirmPassword").value;
    let token = d.querySelector("button[data-token]");
    resetPasswordHelper(password, confirmPassword, token);

  })
}
if (updateProfile) {
  updateProfile.addEventListener("change", function (e) {
    e.preventDefault();
    // multipart data send 
    const formData = new FormData();
    formData.append("user", updateProfile.files[0]);
    updateProfileHelper(formData);
  })
}