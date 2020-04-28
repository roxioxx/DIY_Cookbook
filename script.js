const button = document.querySelector('.btn');
const tooltip = document.querySelector('.tooltip');

let popperInstance = null;

function create() {
    popperInstance = Popper.createPopper(button, tooltip, {
        modifiers: [{
            name: 'offset',
            options: {
                offset: [0, 8],
            },
        }, ],
    });
}

function destroy() {
    if (popperInstance) {
        popperInstance.destroy();
        popperInstance = null;
    }
}

function show() {
    tooltip.setAttribute('data-show', '');
    create();
}

function hide() {
    tooltip.removeAttribute('data-show');
    destroy();
}

const showEvents = ['mouseenter', 'focus'];
const hideEvents = ['mouseleave', 'blur'];

showEvents.forEach(event => {
    button.addEventListener(event, show);
});

hideEvents.forEach(event => {
    button.addEventListener(event, hide);
});



tippy('[data-tippy-content]');

// String (CSS selector matching elements on the document)
tippy('#id');
tippy('.class');
tippy('[data-tippy-content]');

// Element
tippy(document.getElementById('my-element'));

// Element[]
tippy([element1, element2, element3]);

// NodeList
tippy(document.querySelectorAll('.my-elements'));



///////////////////////////////////////////////////////////
/////////////////////EXPERIMENTAL AREA/////////////////////
///////////////////////////////////////////////////////////