function handleClick (e) {
    e.preventDefault();
    if (e.target.classList.contains('btn-delete')){
        deleterBook(e.target)
    } 
    else if (e.target.matches('.btn-edit') || e.target.matches('.fa-edit')){
        editBook(e.target);
    } else if (e.target.matches(`.btn-update`)){
        updateBook(e.target);
    }
}
export default handleClick;