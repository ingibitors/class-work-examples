async function getBookList () {
    const response = await request.get("http://books.danit.com.ua/books");
    const bookList = response.data.map(createBook).join('')
    tBody.innerHTML = bookList;
}
export default getBookList;