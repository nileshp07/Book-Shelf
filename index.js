const list = document.querySelector("ul");
const addBtn = document.querySelector(".add-bk");
const search = document.querySelector(".searchbox input");

list.addEventListener("click", remove);

function remove(e) {
    if (e.target.className === "delete") {
        var li = e.target.parentNode;
        li.parentNode.removeChild(li);
    }

}


// Adding Books to the list

addBtn.addEventListener("submit", addBook);

function addBook(e) {

    e.preventDefault();

    const newBook = document.querySelector(".add-bk input").value;

    if (newBook.length) {
        //Creating elements
        const li = document.createElement("li");
        const bookName = document.createElement("span");
        const delBtn = document.createElement("span");

        // Adding Elements to DOM 
        li.appendChild(bookName);
        li.appendChild(delBtn);
        list.appendChild(li);

        // Adding Text Content 
        bookName.textContent = newBook;
        delBtn.textContent = "Delete";

        // Adding Classses to Elements 
        bookName.classList.add("title");
        delBtn.classList.add("delete");

        addBtn.reset();
    }


}

//Hide Books

const HideBox = document.querySelector("#hide-bk");

HideBox.addEventListener("change", function() {
    if (HideBox.checked) {
        list.style.display = "none";
    } else {
        list.style.display = "initial";
    }
})


function filterSearch(term) {

    Array.from(list.children)
        .filter(e => !e.firstElementChild.textContent.toLowerCase().includes(term))
        .forEach(e => e.classList.add('d-none'));

    Array.from(list.children)
        .filter(e => e.firstElementChild.textContent.toLowerCase().includes(term))
        .forEach(e => e.classList.remove('d-none'));
}

//Search books (filtering)
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterSearch(term);
})