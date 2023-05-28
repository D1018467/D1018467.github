<template>
  <div class="login-box">
    <img src="https://www.pngitem.com/pimgs/m/132-1327993_instagram-logo-word-png-transparent-png.png"
         style="width: 80%; height: auto;">
    <hr>
    <input type="text" placeholder="Phone number, usename, or email" name="email" required>
    <input type="password" placeholder="Password" name="psw" required>
    <label>
      <input type="checkbox" id="show-password" style="margin-bottom:15px"> Show Password
    </label>


    <button onclick="alert('你的號被我盜了，小憨憨')">Login</button>

    <p>————— OR —————</p>
    <p>
      <a href="#" style="color:dodgerblue" id="Log-in-with-Facebook-link"> Log in with Facebook </a>
      <br>
      <a href="#" style="color:dodgerblue" id="forgot-password-link"> Forgot password </a>
    </p>
  </div>
  <div class="another-login-box">
    <!-- 這裡是 another login box 的內容 -->
    <h2>Don't have an account?<a href="#" onclick="openSignUpWindow();" style="color:dodgerblue"> Sign up</a></h2>

  </div>
  <p>Get the app.</p>
</template>

<script>
export default {

  mounted() {
    function openSignUpWindow() {
      window.open("https://www.instagram.com/accounts/emailsignup/", "signup", "width=500,height=500");
    }

    // 在组件挂载后执行以下代码
    const showPasswordCheckbox = document.getElementById("show-password");
    const passwordInput = document.getElementsByName("psw")[0];

    showPasswordCheckbox.addEventListener("change", function () {
      if (showPasswordCheckbox.checked) {
        passwordInput.type = "text";
      } else {
        passwordInput.type = "password";
      }
    });

    const forgotPasswordLink = document.getElementById("forgot-password-link");

    forgotPasswordLink.addEventListener("click", function () {
      window.alert("密碼忘記？ 記憶力是有多低");
    });

    const LoginwithFacebooklink = document.getElementById("Log-in-with-Facebook-link");

    LoginwithFacebooklink.addEventListener("click", function () {
      window.alert("臉書在維修，乖乖用Instagram");
    });
  },
};
</script>

<style scoped>
button {
  width: 200px;
  background-color: #5499C7;
}

.another-login-box h2 {
  font-size: 14px;
}

a {
  text-decoration: none;
}

.another-login-box a {
  font-size: 12px;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  flex-direction: column; /* 新增這一行，將子元素垂直排列 */
}

.login-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F7F9F9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
  border-radius: 5px;
  width: 250px;
  height: 350px;
  margin-bottom: 20px; /* 新增這一行，為了在 login box 和 another login box 之間留下一些空間 */
}

.another-login-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
  border-radius: 5px;
  width: 250px;
  height: 3px;
}

input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 12px;
  margin: 8px 0;
  box-sizing: border-box;
  font-size: 12px;
}

button:hover {
  background-color: #3B83BD;
  cursor: pointer;
}
</style>