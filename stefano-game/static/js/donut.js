/// <reference path="../libs/three.js" />
function Donut() {
    var singleGeometry = new THREE.Geometry();

    var torusGeometry = new THREE.TorusGeometry( 8, 3, 8, 20, 6.3 );
    var torus = new THREE.Mesh( torusGeometry );
    torus.position.set( 0, 0, 3 );
    torus.updateMatrix();
    singleGeometry.merge( torus.geometry, torus.matrix );

    var circleGeometry = new THREE.CircleGeometry( 8, 32, 0, 6.3 )
    var circle = new THREE.Mesh( circleGeometry );
    circle.updateMatrix();
    singleGeometry.merge( circle.geometry, circle.matrix );

    var mesh = new THREE.Mesh( singleGeometry );

    return mesh;
}