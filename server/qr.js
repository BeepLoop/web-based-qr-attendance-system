const path = require('path');
const fs = require('fs');
const QRCode = require('qrcode');
const opts = {
    errorCorrectionLevel: 'H',
    type: 'image/jpeg',
    quality: 0.3,
    margin: 1,
};

const content = {
    name: 'John Loyd Mulit',
    course: 'BSIT',
    department: 'CTET',
    id: '2020-00043',
};

QRCode.toDataURL(JSON.stringify(content), opts, (err, url) => {
    if (err) console.log('an error occurred: ', err);

    const data = url.replace(/^data:image\/\w+;base64,/, '');
    console.log(data);

    const buffer = Buffer.from(data, 'base64');
    fs.writeFileSync(path.join(__dirname + '/images/qr.png'), buffer, (err) => {
        if (err) return console.log('error occurred: ', err);

        console.log('success');
    });
});
