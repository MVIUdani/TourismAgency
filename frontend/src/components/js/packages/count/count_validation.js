const yup = require("yup");

const Count_Validation = yup.object().shape({
count: yup.number().required("Passanger Count Required"),
room_count: yup.number().required("Room Count Required"),
})

export default Count_Validation;