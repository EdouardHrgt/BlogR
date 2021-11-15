
// * Mobile NavBar //

const burger = document.getElementById('burger-menu');
const menu = document.getElementById('mobile-menu');


//! toggle on
burger.onclick = () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
}

//! toggle off 
document.onclick = (e) => {  
    if(e.target.id !== 'burger-menu' && e.target.id !== 'mobile-menu')
    {
        burger.classList.remove('active');
        menu.classList.remove('active');
    }
}
