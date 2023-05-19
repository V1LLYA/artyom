function createElement(tag, options = {}) {
    const element = document.createElement(tag);

    if (options.classList) {
        element.className = options.classList;
    }

    if (options.textContent) {
        element.textContent = options.textContent;
    }

    if (options.style) {
        Object.assign(element.style, options.style);
    }

    if (options.listeners) {
        options.listeners.forEach(({ event, handler }) => {
            element.addEventListener(event, handler);
        });
    }

    return element;
}

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

export { createElement, clearElement };