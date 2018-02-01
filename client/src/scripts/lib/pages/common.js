


const init = () => {
    $('[data-js-toggle-menu]').click(() => {
        document.body.classList.toggle('js-menu-open');
    });
};

const finalise = () => {

};

export {init, finalise};
