// The MIT License (MIT)
// Copyright (c) 2020 Lars Jung (https://larsjung.de)

/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
const DPR = wx.getSystemInfoSync().pixelRatio;

const get_attr = (el, key) => {
    if (key === 'width') {
        return el.width;
    } else if (key === 'height') {
        return el.height;
    }
};
const set_attrs = (el, obj) => {
    el.width = obj.width;
    el.height = obj.height;
    return el;
};

const create_el = (el, obj) => {
    return set_attrs(el, obj);
}

const create_canvas = (el, size, ratio) => {
    const canvas = create_el(el, {
        width: size * ratio,
        height: size * ratio
    });
    return canvas;
};

const canvas_to_img = canvas => {
    const img = create_el('image', {
        crossOrigin: 'anonymous',
        src: canvas.toDataURL('image/png'),
        width: get_attr(canvas, 'width'),
        height: get_attr(canvas, 'height')
    });
    return img;
};

export {
    DPR,
    get_attr,
    create_el,
    create_canvas,
    canvas_to_img
};
