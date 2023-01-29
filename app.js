const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions(){
    sectBtns.forEach( btn => btn.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');

        if(id) {
            for(let btn of sectBtns){
                btn.classList.remove('active-btn');
            }
            e.target.classList.add('active-btn');

            for(let section of sections){
                section.classList.remove('active');
                section.classList.remove('active-color');
            }

            const element = document.getElementById(id);
            element.classList.add('active','active-color');
        }
    }));
    
    //Toggle Theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',()=>{
        let element = document.body;
        element.classList.toggle('light-mode');
    })
}

PageTransitions();