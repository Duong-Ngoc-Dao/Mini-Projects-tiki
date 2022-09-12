import data from '../../db.json' assert {type: 'json'}

const params = new URLSearchParams(window.location.search);
const id = params.get('id')

let book = data.filter(function(book){
    return book.id==id
})

