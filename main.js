window.onload = function(){
    let todoList = [];
    if(localStorage.getItem('todo')!= undefined){
        todoList = JSON.parse(localStorage.getItem('todo'))
        list()
    }
    let btn = document.getElementById('btn')
    if(document.getElementById('txt').value == ' ')
    {

        temp.todo != d;
    }else 
    {
        btn.addEventListener("click", function(){
            let d = document.getElementById('txt').value;
            document.getElementById('txt').value = ''    ;
            let temp = {};
            temp.todo = d;
            let i = todoList.length;
            todoList[i] =  temp;
            console.log(todoList);
            list()
            localStorage.setItem('todo', JSON.stringify(todoList))
        }
        )
    }
    function list(){
        let list=''
        for(let key in todoList){
            if(todoList[key].check === true){
                list += '<input type="checkbox" checked>';
            }
            else{
                list += '<input type="checkbox">';
            }
            list += todoList[key].todo + "<br>";
        }
        document.getElementById('list').innerHTML = list;
    } 
}