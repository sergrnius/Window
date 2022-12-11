let tabs = (headerSelecttor, tabSelector, contentSelector, activeClass, display='block') => {
    let header = document.querySelector(headerSelecttor);
    let tab = document.querySelectorAll(tabSelector);
    let content = document.querySelectorAll(contentSelector);

    let hideTabContetn = () => {
        content.forEach(item => {
            item.style.display = 'none';
        });

        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    let showTabContetn = (i = 0) => {
        content[i].style.display =  display;
        tab[i].classList.add(activeClass);
    }
    
    hideTabContetn();
    showTabContetn(0);

    header.addEventListener('click', (e) => {
        let target = e.target;
        if(target.classList.contains(tabSelector.replace(/\./, "")) || 
        target.parentNode.classList.contains(tabSelector.replace(/\./, ""))) {
            tab.forEach((item, i) => {
                if(target == item || target.parentNode == item) {
                    hideTabContetn();
                    showTabContetn(i);
                }
            });
        }
    })
}
export default tabs;