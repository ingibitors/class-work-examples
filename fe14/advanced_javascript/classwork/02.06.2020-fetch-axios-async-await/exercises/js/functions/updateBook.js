async function updateBook (elem){
    const form = elem.closest("form");
    const body = currentInfo(form);
    const currentRow = elem.closest("tr")
    const {id} = currentRow.dataset;

    const {data} = await request.put(`http://books.danit.com.ua/books/${id}`,body);

    if(data.id){  
       currentRow.innerHTML = createBook();
    }
}

export default updateBook;