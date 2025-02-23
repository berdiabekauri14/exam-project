const form = document.querySelector("form");
const submit = document.getElementById("Submit");
database = [];


const FormDatabase = () => {
    const name = form.name.value;
    const lastname = form.lastname.value;
    const age = form.age.value;
    const email = form.email.value;
    const group = form.group.value;

    if (name === "" || lastname === "" || age === "" || email === "" || group === "") {
        alert("Incorrect, Please fill all fields");
        form.action = "";
    }

    if (group === 1 || group === 2 || group == 3) {
        alert("1, 2 and 3 groups doesn't exist anymore");
        form.action = "";
    }

    database.push({
        name: name,
        lastname: lastname,
        age: age,
        email: email,
        group: group
    })

    console.log(database);
    form.action = "./index.html";
    alert(`Hello ${name}, Welcome to Goal oriented academy • GOA`);
}