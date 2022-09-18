const body = document.querySelector('body');
const featureBtns = document.querySelectorAll('.feature-button');
const tabs = document.querySelectorAll('.feature');
const downloadOptionsSection = document.getElementById('download-options')
const questions = document.querySelectorAll('.question'); 
const emailInput = document.getElementById('email-input');
const submitBtn = document.getElementById('submitBtn')
const showMenuBtn = document.getElementById('show-menu-button');
const headerLogo = document.getElementById('header-logo')
const nav = document.querySelector('nav');


featureBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        featureBtns.forEach(btn => {
            btn.classList.remove('active') 
        })
        e.target.classList.add('active')
        const id = e.target.dataset.id;
        tabs.forEach(tab => {
            tab.classList.remove('visible');
        })
        const tab = document.getElementById(id);
        tab.classList.add('visible') 
    })
})


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {  
        if(entry.isIntersecting) {
            entry.target.classList.add('inViewport')
        }else { 
            entry.target.classList.remove('inViewport')
        } 
    })
})
observer.observe(downloadOptionsSection)


questions.forEach(question => {
    question.addEventListener('click', () => { 
        question.classList.toggle('visible');   
    }) 
})

submitBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    if(emailInput.value == '') {
        emailInput.parentElement.classList.add('invalid');
    }else if(emailInput.validity.valid != true) {
        emailInput.parentElement.classList.add('invalid'); 
    }else {
        emailInput.parentElement.classList.remove('invalid');
    }
}) 


showMenuBtn.addEventListener('click', () => {
    if(nav.classList.contains('nav-visible')) {
        nav.classList.remove('nav-visible');
        showMenuBtn.innerHTML = `<img src="images/icon-hamburger.svg" alt="menu-icon">`;
        body.style.overflowY = `scroll`; 
        headerLogo.children[0].children[0].style.fill = `#242A45`;
    }else {
        nav.classList.add('nav-visible');  
        showMenuBtn.innerHTML = `<img src="images/icon-close.svg" alt="close-icon">`;
        body.style.overflowY = `hidden`;
        headerLogo.children[0].children[0].style.fill = `white`;
    } 
})    