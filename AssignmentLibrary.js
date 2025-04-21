
function Book(title, author, isAvailable = true){
    this.title = title,
    this.author = author,
    this.isAvailable  = isAvailable
}

function Member(name, borrowedBooks){
    let obj = new Book(title, author, isAvailable)
    this.name = name
    this.borrowedBooks = borrowedBooks

    this.borrowBook=function(){
        if(obj.isAvailable == true){
            
        }
    }
}
