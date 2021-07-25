function currentInfo (form){
    const name=form.querySelector("[name='book-name']").value
    const author=form.querySelector("[name='book-author']").value
    const isbn=form.querySelector("[name='book-isbn']").value

     return {name,author,isbn}
}
export default currentInfo;