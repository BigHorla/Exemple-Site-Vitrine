const nav = document.querySelector('nav');
const formBtn = document.querySelector('.form-btn');

window.addEventListener('scroll', () => {

    if(window.scrollY > 30){
        nav.classList.add('anim-nav');
    }else{
        nav.classList.remove('anim-nav');
    }

})

//Portfolio

if(window.matchMedia("(min-width: 850px)").matches){

    const equipmentBtns = document.querySelectorAll('.equipment__equipments__btn');
    const equipmentImageDisplay = document.querySelector('.modal-bloc');
    const imgIndex = document.querySelector('.modal-bloc img');

    equipmentBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let index = e.target.getAttribute('data-index');
            imgIndex.src = `assets/img${index}-equip.jpg`;
            equipmentImageDisplay.classList.add('active');
        })
    })
    
    equipmentImageDisplay.addEventListener('click', () => {
        equipmentImageDisplay.classList.remove('active');
    })

}

formBtn.addEventListener('click', (e) =>{
    e.preventDefault();
})
