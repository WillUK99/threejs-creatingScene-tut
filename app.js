const innerWidth = window.innerWidth
const innerHeight = window.innerHeight


// setting up scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 100)
// const light = new THREE.AmbientLight(0x404040)

// setting the height/width of where to render the cube
const renderer = new THREE.WebGLRenderer()
renderer.setSize(innerWidth, innerHeight)

// appending renderer to body -> domElement is a canvas in which the renderer draws its output
document.body.appendChild(renderer.domElement)


// making geometry, material used and adding it to the cube variable
const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({
    color: 0x00ff11
})
const cube = new THREE.Mesh(geometry, material)

// adding the cube to the scene 
scene.add(cube)

camera.position.z = 5


// basic animation loop
let rotationIncrement = .01
function animate() {
    requestAnimationFrame(animate)
    // rotates box on x/y 
    cube.rotation.x += rotationIncrement
    cube.rotation.y += rotationIncrement
    
    //actually renders the scene and camera on each animation
    renderer.render(scene, camera)
}

animate()