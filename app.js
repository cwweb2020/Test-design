let nav = document.querySelectorAll('.linkis')
console.log(nav);
for (let i = 0; i < nav.length; i++) {
    const element = nav[i];
    console.log(element);
    element.addEventListener('click',function (e){
        console.log('diste click');
        element.classList.add("active");
        
    })
}
    

