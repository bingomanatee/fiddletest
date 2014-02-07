var loader = new THREE.ImageLoader();

loader.load('images/dave_trek.png', function (data) {
console.log('loaded: ', data);
}, function () {

}, function (err) {
    console.log('error: ', err);
});