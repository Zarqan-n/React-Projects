// let arr = []

// const inp = document.querySelector("input")
// const btn = document.querySelector("button")
// const dtn = document.getElementById("del")
// const lst = document.getElementById("unlst")
// let c = 1;

// btn.addEventListener('click', (e) => {
//     console.log(e);
//     if (inp.value !== '') {
//         let obj = {
//             id: c++,
//             name: inp.value
//         }
//         arr.push(obj)
//         inp.value = ''
//     }
//     else {
//         alert("Enter name to continue")
//     }
//     show()
// })

// dtn.addEventListener("click", () => {
//     let array = arr.filter(prev => (prev.id != inp.value))
//     arr = array
//     inp.value = ''
//     show()
// })

// function show() {
//     lst.innerHTML = ''
//     arr.map((e, idx) => {
//         const newli = document.createElement('li');
//         newli.textContent = `${e.id}. ${e.name}`
//         lst.appendChild(newli)
//         // console.log(e,idx);
//     });
// }

// ar = [{
//     id: 0,
//     name: 'e'
// },
// {
//     id: 1,
//     name: 'g'
// },
// {
//     id: 2,
//     name: ''
// },
// {
//     id: 3,
//     name: 'w'
// }]

// const res = ar.every(e => {
//     // console.log(e.name);
//     return e.name !== ''
// })

// console.log(res);

// console.log(false+0);
// console.log(true+1);



// function show(a,...elem){
//     console.log(a,elem);
// }


// show(4,'f','e','g',7)


// let arr1 = [1,2,3,4]
// let arr2 = [5,6,7,8]

// let arr3 = [...arr1,...arr2]

// console.log();




// { var x = 10 }

// {
//     let y = 40
//     console.log(x);
// }

// const dec =show() 
// function show(e){
//     return e
// }


// arr = [1,2,3,4,5]

// arr.splice(0,3,123)

// console.log(arr);



// let a = arr.values()

// console.log(arr);
// console.log(a);

// const bdy = document.querySelector('body')


// async function getData(){
//     const body = await fetch('https://picsum.photos/v2/list')
//     console.log(body);
//     const data = await body.json()
//     console.log(data);


//     data.map((e)=>{
//         const img = document.createElement('img')
//         img.src = e.download_url
//         bdy.appendChild(img)
//     })
// }

// console.log(typeof(undefined));
// console.log(undefined);

// console.log(usera["age-is"]);


// const user = { name: "A",
//     age:20
//  };
// const admin = {...user};
// admin.name = "B";
// console.log(user);
// console.log(admin);


// const obj = { a: 1, b: 2 };
// for (let key in obj) {
//   console.log(key, obj[key]);
// }


// const obj = {};
// obj[1] = "one";
// obj["1"] = "ONE";
// console.log(obj);

// const user = {
//   name: "A",
//   greet() {
//     console.log(this.name);
//   }
// };

// user.greet();


// const user = {
//     name: "Zarqan",
//     age: 20,
//     isAdmin: false
// }

// console.log(user);
// console.log({user});































