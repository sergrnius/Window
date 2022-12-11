let img = () => {

    let calcScrollImg = () => {
        let div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);

        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        return scrollWidth;
    }
    
    let imgPopup = document.createElement('div');
    let workSection = document.querySelector('.works');
    let bigImg = document.createElement('img');
    let scrollImg = calcScrollImg();

    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';
    bigImg.style.width = '600px';
    bigImg.style.height = '600px';

    imgPopup.appendChild(bigImg);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;
        if(target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            let path = target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scrollImg}px`;
        }

        if(target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = '0px';

        }
    })
}

export default img;