/// <reference path="game.js" />
/// <reference path="../libs/three.js" />
function Main() {
    //zmiennie prywatne
    var contatiner = document.getElementById( "renderer" );
    var renderer = new THREE.WebGLRenderer( { antialias: true } );
    contatiner.appendChild( renderer.domElement );
    renderer.setClearColor( "#000000" );
    renderer.shadowMap.enabled = true;
    renderer.shadowMap = THREE.PCFSoftShadowMap;
    resizeRenderer();

    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera( 45, 4 / 3, 0.1, 10000 );

    camera.position.set( 0, 400, 400 );
    camera.lookAt( scene.position );

    scene.add( camera );

    var raycaster = new THREE.Raycaster()

    //funkcje do wykonania w animate scene
    var toAnimate = [];

    //metody prywatne   

    //zmienne publiczne

    //animate scene
    function animateScene() {
        requestAnimationFrame( animateScene );
        renderer.render( scene, camera );
        toAnimate.forEach( function ( i ) {
            i();
        } )
    }
    animateScene();

    //pozostałe
    function resizeRenderer() {
        var width = contatiner.offsetWidth;
        var height = contatiner.offsetHeight;
        renderer.setSize( width, height );
    }

    //metody publiczne
    this.addToAnimate = function ( method ) {
        toAnimate.push( method );
    }

    //eventy
    window.onresize = resizeRenderer;

    //test
    var helper = new THREE.AxisHelper( 200 );
    scene.add( helper );

    //OBIEKTY POZOSTAŁYCH KLAS
    var game = new Game( scene, camera, raycaster, this );
}