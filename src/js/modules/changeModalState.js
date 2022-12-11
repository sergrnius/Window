import checkNumInputs from './checkNumInputs';
let changeModalState = (state) => {
    let windowForm = document.querySelectorAll('.balcon_icons_img');
    let windowWidth = document.querySelectorAll('#width');
    let windowHeight = document.querySelectorAll('#height');
    let windowView = document.querySelectorAll('#view_type');
    let windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');

    let bindActionToElement = (event, elem, prop) => {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch(item.nodeName) {
                    case 'SPAN' : 
                        state[prop] = i;
                        break;
                    case 'INPUT' : 
                        if(item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';
                            elem.forEach((item, j) => {
                                item.checked = false;
                                if(i == j) {
                                    item.checked = true;
                                }
                            })
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT' : 
                        state[prop] = item.value;
                        break;
                }
            })
        }) 
    }

    bindActionToElement('click', windowForm, 'form');
    bindActionToElement('input', windowWidth, 'width');
    bindActionToElement('input', windowHeight, 'height');
    bindActionToElement('change', windowView, 'view');
    bindActionToElement('change', windowProfile, 'profile');
}   

export default changeModalState;