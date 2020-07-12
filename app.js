let form = document.forms['form'];
let listItems = document.querySelectorAll('.list li');
let Delete = document.querySelectorAll('.delete');
let list = document.querySelector('.list');
let addForm = document.querySelector('#addForm');
// Search Filtering
form.addEventListener('keyup', (e)=>{

    let inputValue = e.target.value.toLowerCase();
    
    listItems.forEach(item =>{
        let link = item.firstElementChild.textContent.toLowerCase();
        
        if(link.indexOf(inputValue) !== -1){
            item.style.display = 'block'

        }else{
            item.style.display = 'none';
        }
    })


})



// addForm item

addForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    let inputValue = e.target['input'].value;

    // Create Element 
    let li = document.createElement('li');
    let a = document.createElement('a');
    let Delete = document.createElement('button');

// Set The VAlue of the element
    a.innerHTML = inputValue;
    Delete.innerHTML = 'Delete';

    Delete.classList.add('delete');

    li.appendChild(a);
    li.appendChild(Delete);
    list.insertBefore(li, list.firstElementChild);

})


    list.addEventListener('click', (e)=>{
            let li = document.querySelector('li')
            list.removeChild(li)
        })


