var app = app || {};

app.init = function(){
  app.scene = new THREE.Scene();
  app.width = window.innerWidth;
  app.height = window.innerHeight;

  app.camera = new THREE.PerspectiveCamera(75, app.width/app.height, 0.1, 1000);

  app.camera.position.z = 275;

  app.camera.lookAt(app.scene.position);

  app.renderer = new THREE.WebGLRenderer();
  app.renderer.setSize(app.width, app.height);
  document.body.appendChild(app.renderer.domElement);

  // app.projector = new THREE.Projector();
  // app.mouseVector = new THREE.Vector3();
  // https://soledadpenades.com/articles/three-js-tutorials/object-picking/

  var sunGeometry = new THREE.SphereGeometry(2,32,32);
  var sunMaterial = new THREE.MeshBasicMaterial({
    // color: 0xffffff,
    wireframe: false,
    map: THREE.ImageUtils.loadTexture('img/one/sunmap.jpg')
  });
  app.sun = new THREE.Mesh(sunGeometry, sunMaterial);

  var mercuryGeometry = new THREE.SphereGeometry(0.382,32,32);
  var mercuryMaterial = new THREE.MeshBasicMaterial({
    // color: 0x7F7F7F,
    wireframe: false,
    map: THREE.ImageUtils.loadTexture('img/one/mercurymap.jpg'),
    bumpMap: THREE.ImageUtils.loadTexture('img/one/mercurybump.jpg'),
    bumpScale: 0.05
  });
  app.mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);

  var venusGeometry = new THREE.SphereGeometry(0.949,32,32);
  var venusMaterial = new THREE.MeshBasicMaterial({
    // color: 0xD46500,
    wireframe: false,
    map: THREE.ImageUtils.loadTexture('img/one/venusmap.jpg'),
    bumpMap: THREE.ImageUtils.loadTexture('img/one/venusbump.jpg'),
    bumpScale: 0.05
  });
  app.venus = new THREE.Mesh(venusGeometry, venusMaterial);

  var earthGeometry = new THREE.SphereGeometry(1,32,32);
  var earthMaterial = new THREE.MeshBasicMaterial({
    // color: 0x8CEFB0,
    wireframe: false,
    map: THREE.ImageUtils.loadTexture('img/one/earthmap1k.jpg'),
    bumpMap: THREE.ImageUtils.loadTexture('img/one/earthbump1k.jpg'),
    bumpScale: 0.05
  });
  app.earth = new THREE.Mesh(earthGeometry, earthMaterial);

  var marsGeometry = new THREE.SphereGeometry(0.532, 32,32);
  var marsMaterial = new THREE.MeshBasicMaterial({
    // color: 0xFF7A00,
    wireframe: false,
    map: THREE.ImageUtils.loadTexture('img/one/mars_1k_color.jpg'),
    bumpMap: THREE.ImageUtils.loadTexture('img/one/marsbump1k.jpg'),
    bumpScale: 0.05
  });
  app.mars = new THREE.Mesh(marsGeometry, marsMaterial);

  var jupiterGeometry = new THREE.SphereGeometry(11.209,32,32);
  var jupiterMaterial = new THREE.MeshBasicMaterial({
    // color: 0xBFBF8A,
    wireframe: false,
    map: THREE.ImageUtils.loadTexture('img/one/jupitermap.jpg')
  });
  app.jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);

  var saturnGeometry = new THREE.SphereGeometry(9.44,32,32);
  var saturnMaterial = new THREE.MeshBasicMaterial({
    // color: 0xABAB96,
    wireframe: false,
    map: THREE.ImageUtils.loadTexture('img/one/saturnmap.jpg')
  });
  app.saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);

  var uranusGeometry = new THREE.SphereGeometry(4.007,32,32);
  var uranusMaterial = new THREE.MeshBasicMaterial({
    // color: 0x6BCDEF,
    wireframe: false,
    map: THREE.ImageUtils.loadTexture('img/one/uranusmap.jpg')
  });
  app.uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);

  var neptuneGeometry = new THREE.SphereGeometry(3.883, 32,32);
  var neptuneMaterial = new THREE.MeshBasicMaterial({
    // color: 0x4D6CFF,
    wireframe: false,
    map: THREE.ImageUtils.loadTexture('img/one/neptunemap.jpg')
  });
  app.neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);



  app.light = new THREE.DirectionalLight(0xffffff);
  app.light.position.set(0,1,1).normalize();

  app.scene.add(app.sun, app.mercury, app.venus, app.earth, app.mars, app.jupiter, app.saturn, app.uranus, app.neptune, app.light);



  app.controls = new THREE.TrackballControls(app.camera);

  app.animate();
}; // end Init function

var t = 0;

app.animate = function(){
  app.controls.update();

  // app.sun.rotation.y += 0.005;
  app.mercury.rotation.y += 0.05865;
  app.venus.rotation.y -= 0.243;
  app.earth.rotation.y += 0.001;
  app.mars.rotation.y += 0.00103;
  app.jupiter.rotation.y += 0.00041;
  app.saturn.rotation.y += 0.00044;
  app.uranus.rotation.y -= 0.00072;
  app.neptune.rotation.y += 0.00072;

  t += 0.01;
  app.mercury.position.x = 3.9*Math.cos(t/0.24) + 0;
  app.mercury.position.z = 3.9*Math.sin(t/0.24) + 0;

  app.venus.position.x = 7.2*Math.cos(t/0.62) + 0;
  app.venus.position.z = 7.2*Math.sin(t/0.62) + 0;

  app.earth.position.x = 10*Math.cos(t) + 0;
  app.earth.position.z = 10*Math.sin(t) + 0;

  app.mars.position.x = 15.2*Math.cos(t/1.52) + 0;
  app.mars.position.z = 15.2*Math.sin(t/1.52) + 0;

  app.jupiter.position.x = 52*Math.cos(t/11.86) + 0;
  app.jupiter.position.z = 52*Math.sin(t/11.86) + 0;

  app.saturn.position.x = 95.4*Math.cos(t/29.46) + 0;
  app.saturn.position.z = 95.4*Math.sin(t/29.46) + 0;

  app.uranus.position.x = 191.8*Math.cos(t/84.01) + 0;
  app.uranus.position.z = 191.8*Math.sin(t/84.01) + 0;

  app.neptune.position.x = 300.6*Math.cos(t/164.8) + 0;
  app.neptune.position.z = 300.6*Math.sin(t/164.8) + 0;

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

  $(app.earth).on('click', function(){
    console.log('clicked earth');
  })
})
