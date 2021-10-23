class Book {
    constructor(nname, nauthor, ntype) {
        this.name = nname;
        this.author = nauthor;
        this.type = ntype;
    }
}
class Display {
    add(book) {
        //console.log('adding');
        let tablebody = document.getElementById('tablebody');
        let uistring = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`
        tablebody.innerHTML += uistring;
    }

    clear() {
        let libraryform = document.getElementById('libraryform');
        libraryform.reset();
    }
    validate(book) {
        if (book.name.length <= 2 || book.author.length <= 2) {
            return false;
        }
        else {
            return true;
        }
    }
    show(type, message) {
        let Message = document.getElementById('message');
        Message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                           <strong>message:!</strong> ${message}
                           <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                          </div>`
        setTimeout(
            function () {
                Message.innerHTML = '';
            }, 2000
        )
    }
}
//add submit event listner to libraryform
let libraryform = document.getElementById('libraryform');
libraryform.addEventListener('submit', libraryformsubmit);

function libraryformsubmit(e) {
    e.preventDefault();
    console.log('hello');
    let name = document.getElementById('bookname').value;
    let author = document.getElementById('author').value;
    let data = document.getElementById('data');
    let wevd = document.getElementById('wevd');
    let prog = document.getElementById('prog');
    let type;
    if (data.checked) {
        type = data.value;
    }
    else if (wevd.checked) {
        type = wevd.value;
    }
    else if (prog.checked) {
        type = prog.value;
    }
    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('success', ' your book has been successfully added');
    }
    else {

        //show erro to the user
        display.show('danger', ' sorry you can not add this book');
    }

}