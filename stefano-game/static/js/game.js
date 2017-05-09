/// <reference path="donut.js" />
/// <reference path="../libs/three.js" />
function Game( scene, camera, raycaster, that ) {
    //bardzo ważna zmienna określająca sytuację w grze być może przeniesiemy to na serw. 
    var situation = {
        code: [0, 0, 0, 0],
        guesses: [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
    }
    var planszaMaterial = new THREE.MeshPhongMaterial( { color: 0x643c1e, specular: 0x000000} );

    function initLight() {
        var ambient = new THREE.AmbientLight( 0xffffff, 0.2 );
        scene.add( ambient );
        var spotlight = new THREE.SpotLight( 0xffffff, 0.6, 1000, 90 );
        scene.add( spotlight );
        spotlight.position.set( 0, 150, 0 );
    }

    function initObjects() {
        var planszaGeo = new THREE.BoxGeometry( 180, 20, 350, 2, 2, 2 );
        var plansza = new THREE.Mesh( planszaGeo, planszaMaterial );
        scene.add( plansza );
        plansza.translateX( 30 );
        var donut = new Donut();
        donut.material = planszaMaterial;
        donut.rotateX( Math.PI / 2 * 3 );
        for ( var i = 0; i < 4; i++ ) {
            for ( var j = 0; j < 10; j++ ) {
                var clone = donut.clone();
                clone.position.set( i * 24 - 36, 20, j * 32 - 130);
                scene.add( clone );
                clone.name = j + "" + i;
                console.log( clone.name );
            }
        }
    }

    initLight();
    initObjects();

    //test
}