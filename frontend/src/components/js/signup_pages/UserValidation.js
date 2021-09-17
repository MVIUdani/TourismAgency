const yup = require("yup");

const Validation = yup.object().shape({
  firstname: yup.string().required("Firstname Required"),
  lastname: yup.string().required("Lastname Required"),
  email: yup.string().email("Invalid email").required("Email Required"),
  username:yup.string().required("Username Required"),
  password: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Password Required"),
  birthday: yup.date().required("Required"),
  nic: yup.string().required("Required"),
  hotel:yup.string().required("Required"),
  hotelcontact:yup.number().required("Required"),
  address:yup.string().required("Required"),
  city_name: yup.string().required("City name Required"),
  country: yup.string().required("Country Required"), 
})

export default Validation;