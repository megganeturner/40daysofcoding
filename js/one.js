var app = app || {};

app.init = function(){
  app.scene = new THREE.Scene();
  app.width = window.innerWidth;
  app.height = window.innerHeight;

  app.camera = new THREE.PerspectiveCamera(75, app.width/app.height, 0.1, 1000);

  app.camera.position.z = 20;

  app.camera.lookAt(app.scene.position);

  app.renderer = new THREE.WebGLRenderer();
  app.renderer.setSize(app.width, app.height);
  document.body.appendChild(app.renderer.domElement);

  var sunGeometry = new THREE.SphereGeometry(3,10,5);
  var sunMaterial = new THREE.MeshBasicMaterial({
    color: 0xFF7A00,
    wireframe: true
  });
  app.sun = new THREE.Mesh(sunGeometry, sunMaterial);

  app.scene.add(app.sun);


  app.controls = new THREE.TrackballControls(app.camera);

  app.animate();
}; // end Init function

app.animate = function(){
  app.controls.update();

  app.sun.rotation.y += 0.005;

  app.renderer.render(app.scene, app.camera);

  requestAnimationFrame(app.animate);
}; // End animate function

app.onResize = function(){
  app.width = window.innerWidth;
  app.height = window.innerHeight;

  app.camera.aspect = app.width / app.height;
  app.camera.updateProjectionMatrix();

  app.renderer.setSize(app.width, app.height);
}; // End onResize function

window.addEventListener("resize", app.onResize, false);

$(document).ready(function(){
  app.init();
})
