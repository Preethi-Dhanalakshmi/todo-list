let add = document.getElementById("btn");
let list = document.getElementById("main-container");
let input = document.getElementById("detail");
let container = document.getElementById("container");

add.addEventListener("click", function () {

    if (input.value.trim() === "") {
        alert("Please Enter a task");
        return;
    }

    let listitem = document.createElement("li");
    listitem.innerHTML = input.value + "<button class='delete'><i class='fa-solid fa-trash-can'></i></button>";
    list.append(listitem);

    input.value = "";
    container.style.display = "block";

    let deletebtn = listitem.querySelector(".delete");
    deletebtn.addEventListener("click", function (event) {
        event.target.closest("li").remove();

        if (list.childElementCount === 0) {
            container.style.display = "none";
        }
    });
});





