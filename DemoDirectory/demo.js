var loader = new THREE.ImageLoader();

loader.load('https://raw2.github.com/bingomanatee/fiddletest/master/DemoDirectory/images/dave_trek.jpg', function (data) {
    console.log('loaded: ', data);
}, function () {

}, function (err) {
    console.log('error: ', err);
});