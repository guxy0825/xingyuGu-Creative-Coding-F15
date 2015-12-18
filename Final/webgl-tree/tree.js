var renderer, scene, camera, rotSpeed = Math.PI/180,cylinder,sound1, leave_random,
    sin = Math.sin,
    cos = Math.cos,
    tan = Math.tan,
    rand = Math.random,
    floor = Math.floor,
    round = Math.round,
    PI = Math.PI,

    SCREEN_WIDTH = window.innerWidth,
    SCREEN_HEIGHT = window.innerHeight,

    // tree params
    MAX_BRANCHES = 4,
    MIN_BRANCHES = 3,

    RADIUS_SHRINK = 0.6,

    MIN_LENGTH_FACTOR = 0.5,
    MAX_LENGTH_FACTOR = 0.8,

    MIN_OFFSET_FACTOR = 0.7,

    MAX_SPREAD_RADIAN = PI / 4,
    MIN_SPREAD_RADIAN = PI / 10,

    branch_counter;


function init() {

    // set up camera
    camera = new THREE.Camera(45,                     
                              SCREEN_WIDTH / SCREEN_HEIGHT, 
                              1,
                              5000);
    camera.position.set(400, 100, 500);
    // setup scene
    scene = new THREE.Scene();
    // scene.add(camera);
    scene.fog = new THREE.Fog(0x000000, 500, 1500);
    // camera.lookAt(scene.postion);
    var engine = new jWebAudio.SoundEngine();
    source = engine.addSoundSource({
    'url': 'bensound-sweet.mp3',
    'preLoad': true,
    'callback': function() {
        // var id = source.sound.addEffect('3d');
        // var effect = source.sound.getEffect(id);
        // effect.soundObject.setPosition(1, 0, 0);
        source.sound.play();
    }
    });
    // setup renderer
    renderer = new THREE.WebGLRenderer({ 
        clearColor: 0x000000, 
        clearAlpha: 1, 
        antialias: true 
    });
    renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);

    renderer.setClearColor(scene.fog.color, 1);
    renderer.autoClear = false;

    renderer.shadowCameraNear = 3;
    renderer.shadowCameraFar = camera.far;
    renderer.shadowCameraFov = 50;

    renderer.shadowMapBias = 0.0039;
    renderer.shadowMapDarkness = 0.5;

    renderer.shadowMapEnabled = true;
    renderer.shadowMapSoft = true;

    // create graphic container and attach the renderer to it
    container = document.createElement("div");
    document.body.appendChild(container);
    container.appendChild(renderer.domElement);

}

function drawTree(start_position, direction, length, depth, radius) {
    var  half_length_offset,
        new_position, new_direction, new_length, new_depth, new_radius,
        new_base_position, offset_vector,
        num_branches, color, num_segs;


    // determine branch color
    color = ((rand() * 48 + 64) << 16) | 0x3311; // random brown color

    num_segs = depth + 4; // min num_segs = 2
    cylinder = new THREE.Mesh(
           new THREE.CylinderGeometry(num_segs, // numSegs
                                      radius, // topRad
                                      radius * RADIUS_SHRINK, // botRad
                                      length, // height
                                      0,    // topOffset
                                      0),   // botOffset
           new THREE.MeshLambertMaterial({ color: color })
    );
    // cylinder.add(sound1);
    // rotate the cylinder to follow the direction
    cylinder.lookAt(direction);

    // get the offset from start position to cylinder center position
    half_length_offset = direction.clone();
    half_length_offset.setLength(length / 2);

    // calculate center position
    cylinder.position = start_position.clone();
    cylinder.position.addSelf(half_length_offset);

    cylinder.castShadow = true;
    cylinder.receiveShadow = false;

    scene.addObject(cylinder);
    // decrement the number of branches to draw
    branch_counter--;

    // stop recursion if depth reached 1
    if (depth == 1) {
        return;
    }


    // calculate the base start position for next branch
    // a random offset will be added to it later
    new_base_position = start_position.clone();
    new_base_position.addSelf(
            half_length_offset.clone().multiplyScalar(2 * MIN_OFFSET_FACTOR));

    new_depth = depth - 1;
    new_radius = radius * RADIUS_SHRINK;

    // get a random branch number
    num_branches = round((rand() * (MAX_BRANCHES - MIN_BRANCHES))) 
                   + MIN_BRANCHES;


    // recursively draw the children branches
    for (var i = 0; i < num_branches; ++i) {

        // random spread radian
        var spread_radian = rand() * (MAX_SPREAD_RADIAN - MIN_SPREAD_RADIAN) + 
                            MIN_SPREAD_RADIAN;

        // generate a vector which is prependicular to the original direction
        var perp_vec = (new THREE.Vector3(1, 0, 0)).crossSelf(direction); 
        perp_vec.setLength(direction.length() * tan(spread_radian));

        // the new direction equals to the sum of the perpendicular vector
        // and the original direction
        new_direction = direction.clone().addSelf(perp_vec).normalize();

        // generate a rotation matrix to rotate the new direction with
        // the original direction being the rotation axis
        var rot_mat = new THREE.Matrix4();
        rot_mat.setRotationAxis(direction, PI * 2 / num_branches * i);
        rot_mat.rotateAxis(new THREE.Vector3(Math.random(1), Math.random(1), Math.random(1)));
        rot_mat.rotateAxis(new_direction);

        // random new length for the next branch
        new_length = (rand() * (MAX_LENGTH_FACTOR - MIN_LENGTH_FACTOR) + 
                     MIN_LENGTH_FACTOR) * length;

        // caculate the position of the new branch
        new_position = new_base_position.clone();
        offset_vector = half_length_offset.clone();
        new_position.addSelf(
                offset_vector.multiplyScalar(
                    2 * i / (num_branches - 1) * (1 - MIN_OFFSET_FACTOR)));

        //using setTimeout to make the drawing procedure non-blocking
        setTimeout((function(a, b, c, d, e) {
            return function() {
                drawTree(a, b, c, d, e);
            };
        })(new_position, new_direction, new_length, new_depth, new_radius), 0);
        
        var leafMaterial = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('leaf.png'), transparent: true} );
            
        var leaf = new THREE.Mesh(
               new THREE.PlaneGeometry(10,10),
               leafMaterial
        );
        // leafMaterial.transparent = true;
        leafMaterial.side = THREE.DoubleSide;
        leaf.position.x = new_base_position.x*Math.cos(leave_random);
        leaf.position.y = new_base_position.y;
        leaf.position.z = new_base_position.z;
        // var rot_mat2 = new THREE.Matrix4();
        // rot_mat2.setRotationAxis(direction, PI * 2 / num_branches * i);
        // rot_mat2.rotateAxis(new THREE.Vector3(Math.random(1), Math.random(1), Math.random(1)));
        // leaf.rotation.x += 0.01;
        // leaf.rotation.y += 0.02;
        // leaf.geometry.applyMatrix(new THREE.Matrix4().rotateAxis(new THREE.Vector3(Math.random(1), Math.random(1), Math.random(1))));
        // leaf.rotation.set(new THREE.Vector3(Math.random(1), Math.random(1), Math.random(1)));
        scene.addObject(leaf);
        // drawTree(new_position, new_direction, new_length, new_depth, new_radius);
        // more branches to draw, therefore increment the branch counter
        branch_counter++;
    }
}

function setupLights() {
    var ambient_light, main_light;

    ambient_light = new THREE.AmbientLight(0x555555);
    scene.addLight(ambient_light);

    main_light = new THREE.SpotLight(0xffffff);
    main_light.position.set(0, 1000, 1000);
    main_light.castShadow = true;
    scene.addLight(main_light);
}


function drawGround() {
    var ground = new THREE.Mesh(
        new THREE.PlaneGeometry(500, 500),
        new THREE.MeshLambertMaterial({ color: 0x777777 })
    );
    ground.rotation.x = - PI / 2;
    ground.scale.set(100, 100, 100);

    ground.castShadow = false;
    ground.receiveShadow = true;

    scene.addObject(ground);
}

function drawFace(){
    // var face = new THREE.Mesh(
    //     new THREE.SphereGeometry(20, 40, 20),
    //     new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('face.png'), transparent: true} )
    // );
    // face.position.y = 20;
    // scene.addObject(face);
    
  //   	var dae;

		// 	var loader = new THREE.ColladaLoader();
		// // 	loader.options.convertUpAxis = true;
		// 	loader.load( 'Face.dae', function ( collada ) {

		// 		dae = collada.scene;

		// 		} );
		// 		dae.position.set(0,15,0);
		// 		// dae.scale.set(1.5,1.5,1.5);
		// 		dae.scale.x = dae.scale.y = dae.scale.z = 0.2;
		// 		dae.updateMatrix();
		// 		scene.addObject(dae);
}

function animate() {
    // continue the animation if there are branches not drawn
    // if (branch_counter) {
        requestAnimationFrame(animate);
    // }
    render();
}

// var clock = new THREE.Clock();
	
function render(){
  renderer.clear();
    // for(var i = 0; i<30; i++)
    // {
    // camera.translate(1, new THREE.Vector3(Math.sin(rotSpeed), 0.4, Math.cos(rotSpeed)));
    // rotSpeed +=Math.PI/180;
    // }
    // camera.rotation.y = rotSpeed;
    var timer = Date.now() * 0.001;
    camera.translateZ( 10 );
		camera.position.x = 600 * Math.cos( timer );
		camera.position.y = 250;
		camera.position.z = 600 * Math.sin( timer );
		leave_random = Math.random(1);
		// camera.up = new THREE.Vector3(0,1,0);
		// camera.lookAt( new THREE.Vector3(0.5,0.5,1));
		// camera.rotation.z = 45 * Math.PI/180;
		// THREE.AnimationHandler.update( clock.getDelta() );
    renderer.render(scene, camera);
}


window.onload = function () {

    if (!Detector.webgl) {
        Detector.addGetWebGLMessage();
        return;
    }

    init();
    
    setupLights();
    drawGround();
    drawFace();
    // Set the initial branch counter to 1
    // the animation will stop when the counter decreases to 0
    branch_counter = 1;

    drawTree(new THREE.Vector3(0, 0, 0), // start position
            new THREE.Vector3(0, 1, 0), // direction
            180,                        // length
            8,                          // depth
            13);                        // radius

    animate();
};
