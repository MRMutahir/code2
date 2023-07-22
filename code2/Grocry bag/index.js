let screen1 = document.querySelector('.screen1');
let input = document.querySelector('.input');
let addbtn = document.querySelector('.firstbtn');
let listBox = document.querySelector('.listBox');
let box = document.querySelector('.box')
// console.log(screen1)
// console.log(input)
// console.log(firstbtn)
// console.log(listBox)

addbtn.addEventListener('click',() => {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        listBox.appendChild(li);

        let deletbtn = document.createElement('button');
        deletbtn.innerHTML = 'delet';
        li.appendChild(deletbtn);
        let editbtn = document.querySelector('button');
        editbtn.innerHTML = 'Edit';
        li.appendChild(editbtn);
        input.value = '';
        deletbtn.addEventListener('click', () => {
        box.removeChild(listBox.firstChild)
        });
    })




// var inptstore = []
// firstbtn.addEventListener('click', () => {
//     if (input.value === '') {
//         alert('Enter your items')

//     } else {
//         let a = document.createElement('li');
//         a.innerHTML = input.value;
//         listBox.appendChild(a);
        
//     }
//     // console.log(a)
//     btn1.addEventListener("click", () => {
//         let btn1 = document.createElement('button')
//         btn1.innerHTML = "Delet"
//         a.appendChild(btn1)
    
//     })
//     let btn2 = document.createElement('button');
//     btn2.innerHTML = 'Edit'
//     a.appendChild(btn2);
//     btn2.addEventListener("click", () => {
//         input.value = a.value
//     })
//     let span =document.createElement('span');
//     listBox.appendChild(span);
//     span.appendChild(btn1)
//     span.appendChild(btn2)
//     input.value = ''
// })

// let list$Box_fun = (a) => {

// } 
