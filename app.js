const innerWidth = window.innerWidth
const innerHeight = window.innerHeight

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000)
const light = new THREE.AmbientLight(0x404040)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(innerWidth, innerHeight)

document.body.appendChild(renderer.domElement)

const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({
    color: 0x00ff11
})
const cube = new THREE.Mesh(geometry, material)

scene.add(cube, light)

camera.position.z = 5

function animate() {
    requestAnimationFrame(animate)
    cube.rotation.x += .01
    cube.rotation.y += .01
    renderer.render(scene, camera)
}

animate()