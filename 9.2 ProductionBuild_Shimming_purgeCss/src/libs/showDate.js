//import mnt from 'moment'; //global import on webpack.config.js

export function showDate() {
    console.log(mnt(new Date()).format("DD=MM=YYYY"));
}