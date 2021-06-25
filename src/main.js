// The MIT License (MIT)
// Copyright (c) 2020 Lars Jung (https://larsjung.de)

import defaults from './lib/defaults';
import quiet_qrcode from './lib/qrcode';
import create_canvas_qrcode from './lib/create_canvas_qrcode';

const genQrcode = (el, options) => {
    const settings = Object.assign({}, defaults, options);
    const qr = quiet_qrcode(settings.text, settings.ecLevel, settings.minVersion, settings.quiet);
    return create_canvas_qrcode(el, qr, settings, settings.render === 'image');
};

export default genQrcode;
