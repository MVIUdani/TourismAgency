const yup = require("yup");

const Feedback_Validation = yup.object().shape({
firstname : yup.string().required("Firstname Required"),
lastname : yup.string().required("Lastname Required"),
summary :yup.string().required("Required"),
description :yup.string(),
})

export default Feedback_Validation;