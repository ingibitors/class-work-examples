async function deleterBook (elem) {
    const bookRow = elem.closest('tr');
    const {id} = bookRow.dataset;
    // const id = bookRow.dataset.id;
    const response = await fetch(`http://books.danit.com.ua/books/${id}`, {
        method: 'DELETE',
        headers:{
            Authorization:`Bearer ${token}` 
        }
    });
    const {status} = await response.json();
    if (status === "Success") {
        bookRow.remove();
    }
}
export default deleterBook;