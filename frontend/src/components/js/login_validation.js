const yup = require("yup");

const Login_Validation = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email Required"),
    password: yup.string().required("Password Required"),
})

export default Login_Validation;