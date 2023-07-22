let allBtn = document.querySelector(".allBtn");
let heading = document.querySelector('.heading');
let first_btn = document.querySelector('.first_btn');
let menu = document.querySelector('.menu');
let menu_pra = document.querySelector('.menu_pra');
let menu_img = document.querySelector('.menu_img');
let tittel = document.querySelector('.tittel');
let price = document.querySelector('.price');
// console.log(tittel);
// console.log(price);
// console.log(allBtn);
// console.log(first_btn);
// console.log(heading);
// console.log(menu);
// console.log(menu_img);
// console.log(menu_pra);

let buttons = ["Breackfast", 'Lunch', 'Dinner', 'Shakes', 'Sweets', 'Cake', 'Pizza', 'Soda']
let newBtn = [''];
buttons.forEach(Btn => {
    const string = `<button class="first_btn" >${Btn}</button>`
    //  console.log(string)
    newBtn.push(string);
});
allBtn.innerHTML = newBtn.join(" ")
// newBtn.filter(function(value) {
    


// });
// console.log(newBtn)
let menuarr = [
    {
        id: 1,
        src: './images/pic-1.jpeg',
        title: 'Oatmeal Almond Milk with Oranges.',
        pric: '$ 13.00',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quis quibusdam eum impedit commodi sed aliquid alias in voluptate dolor.',
        category: 'Breakfast'
    },
    {
        id: 2,
        src: "./images/pic-3.jpeg",
        title: 'Shakes',
        pric: '$ 13.00',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quis quibusdam eum impedit commodi sed aliquid alias in voluptate dolor.',
        category: 'Dinner'
    },
    {
        id: 3,
        src: "./images/pic-2.jpeg",
        title: 'sweets',
        pric: '$ 13.00',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quis quibusdam eum impedit commodi sed aliquid alias in voluptate dolor.',
        category: 'Lunch'
    },
    {
        id: 4,
        src: "./images/pic-7.jpeg",
        title: 'Shakes',
        pric: '$ 13.00',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quis quibusdam eum impedit commodi sed aliquid alias in voluptate dolor.',
        category: 'BreakFast'
    },
    {
        id: 5,
        src: "./images/pic-8.jpeg",
        title:"Burger"
        ,
        pric: '$ 13.00',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quis quibusdam eum impedit commodi sed aliquid alias in voluptate dolor.',
        category: 'Dinner'
    },
    {
        id: 6,
        src: "./images/pic-11.jpeg",
        title: 'Shakes',
        pric: '$ 13.00',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quis quibusdam eum impedit commodi sed aliquid alias in voluptate dolor.',
        category: 'Lunch'
    },
    {
        id: 7,
        src: "./images/pic-10.jpeg",
        title: 'Cake',
        pric: '$ 13.00',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quis quibusdam eum impedit commodi sed aliquid alias in voluptate dolor.',
        category: 'Lunch'
    },
    {
        id: 8,
        src: "./images/pic-9.jpeg",
        title: 'Burger',
        pric: '$ 13.00',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quis quibusdam eum impedit commodi sed aliquid alias in voluptate dolor.',
        category: 'Lunch'
    }

]
// menu = desc;
// console.log(menu)
let mtarr = [];
menuarr.map((food)=>{
    let reversarr = `<div class="menu">
<img class="menu_img" id="" src="${food.src}" height="100px" alt="">
<div class="position" id="">
<h2 class="tittel" id="">${food.title}</h2>
<h3 class="price" id="">${food.pric}</h3>
<p class="menu_pra" id="">${food.desc}</p>
<p class="menu_pra" id="">${food.category}</p>
</div>  
</div>`
   mtarr.push(reversarr);
})
menu.innerHTML = mtarr.join('')


// let new_menu = []
// menuarr.forEach(food =>{
// let fooods =  `
// <div class="menu">
// <img class="menu_img" id="" src="${food}" height="100px" alt="">
// <div class="position" id="">
//     <h2 class="tittel" id="">${food}</h2>
//     <h3 class="price" id="">${food}</h3>
//     <p class="menu_pra" id="">${food}</p>
// </div>

// </div>`
// new_menu.push(fooods)
// })
// menu.innerHTML = new_menu.join('')
// array.forEach(element => {
    
// });



























































//  let anotherMenuarr = menuarr.forEach(ary => {
//     let a = menuarr[ary]
//    menu_pra.textContent = a.desc
//    menu_img .src = a.src
//    tittel.textContent = a.title
//  price.textContent = a.pric
//     // return anotherMenuarr

//     // console.log(anotherMenuarr)
//  });
// let num = [20,30,40,50,60,70]
//  let b = num.filter((a)=>{
// return a<35 , a>60   
// }
// )
// console.log(b)

//  let newarr =  num.filter((a) => {
//   let b = a<35
//   console.log(b)

//   console.log(a )
//   console.log(b)
//   console.log(d)
  
//   console.log(num)

// })




