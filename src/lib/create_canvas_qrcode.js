// The MIT License (MIT)
// Copyright (c) 2020 Lars Jung (https://larsjung.de)

/* eslint-disable linebreak-style */
import { DPR, create_canvas, canvas_to_img } from './dom';
import draw_module_rounded from './draw_rounded';
import draw_mode from './draw_mode';

const draw_background = (ctx, settings) => {
    if (settings.back) {
        ctx.fillStyle = settings.back;
        ctx.fillRect(0, 0, settings.size, settings.size);
    }
};

const draw_module_default = (qr, ctx, settings, width, row, col) => {
    if (qr.is_dark(row, col)) {
        ctx.rect(col * width, row * width, width, width);
    }
};

const draw_modules = (qr, ctx, settings) => {
    if (!qr) {
        return;
    }

    const draw_module = settings.rounded > 0 && settings.rounded <= 100 ? draw_module_rounded : draw_module_default;
    const mod_count = qr.module_count;

    let mod_size = settings.size / mod_count;
    let offset = 0;
    if (settings.crisp) {
        mod_size = Math.floor(mod_size);
        offset = Math.floor((settings.size - mod_size * mod_count) / 2);
    }

    ctx.translate(offset, offset);
    ctx.beginPath();
    for (let row = 0; row < mod_count; row += 1) {
        for (let col = 0; col < mod_count; col += 1) {
            draw_module(qr, ctx, settings, mod_size, row, col);
        }
    }
    ctx.fillStyle = settings.fill;
    ctx.fill();
    ctx.translate(-offset, -offset);
};

const draw = (qr, ctx, settings) => {
    draw_background(ctx, settings);
    draw_modules(qr, ctx, settings);
    draw_mode(ctx, settings);
};

const create_canvas_qrcode = (el, qr, settings, as_image) => {
    const ratio = settings.ratio || DPR;
    const canvas = create_canvas(el, settings.size, ratio);
    const context = canvas.getContext('2d');

    context.scale(ratio, ratio);
    draw(qr, context, settings);
    return as_image ? canvas_to_img(canvas) : canvas;
};

export default create_canvas_qrcode;
