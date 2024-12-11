let panel=document.querySelectorAll('.panel')

panel.forEach((e)=>{
    e.addEventListener('click',()=>{
        removeActive()
        e.classList.add('active')
    })
})

function removeActive(){
    panel.forEach((e)=>{
        e.classList.remove('active')
        // console.log('removed')
    })
}