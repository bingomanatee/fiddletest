var loader = new THREE.ImageLoader();

loader.load('https://rawgithub.com/bingomanatee/fiddletest/master/DemoDirectory2/images/dave_trek.jpg', function (data) {
    console.log('loaded: ', data);
    document.getElementById('foo').appendChild(data);
}, function () {

}, function (err) {
    console.log('error: ', err);
});