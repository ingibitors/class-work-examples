function createBook (data) {
    return `<tr data-id=${data.id}>
    <td>${data.name}</td>
    <td>${data.author}</td>
    <td>${data.isbn}</td>
    <td><a href="#" class="btn btn-info btn-sm btn-edit"><i class="fas fa-edit"></i></a></td>
    <td><a href="#" class="btn btn-danger btn-sm btn-delete">X</a></td>
    </tr>`;
}
export default createBook;