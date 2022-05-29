const hamburgher = document.querySelector('.hamburgher');
const navMenu = document.querySelector('.nav-menu');

const myFun = () => {
    
    hamburgher.classList.toggle("active");
    navMenu.classList.toggle("active")
}

hamburgher.addEventListener('click', myFun)