function editBook (elem){
    const currentRow = elem.closest("tr");
    const [title,author,isbn] = [...currentRow.children].map(elem => elem.textContent);
    currentRow.innerHTML = createBook ()
}
export default editBook;