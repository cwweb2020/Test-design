// let nav = document.querySelectorAll('.linkis')
// console.log(nav);
// for (let i = 0; i < nav.length; i++) {
//     const element = nav[i];
//     console.log(element);
//     element.addEventListener('click',function (e){
//         console.log('diste click');
//         element.classList.add("active");
        
//     })
// }
    
let lista = document.querySelectorAll('.linkis')
 lista[0].classList.add('active')

for (let i = 0; i < lista.length; i++) {
    const item = lista[i];
    item.addEventListener('click', function (e) {
        
        for (let i = 0; i < lista.length; i++) {
            lista[i].classList.remove('active')
        }

        this.classList.add('active')
     })



    }
