/* ---------------- SLIDE NAVIGATION ---------------- */

const slides = document.querySelector(".slides")

function goSlide(index){

slides.style.transform = `translateX(-${index * 100}vw)`

}


/* ---------------- TYPING EFFECT ---------------- */

const words = ["IT Student","AutoCAD Designer","Tech Learner"]

let wordIndex = 0
let charIndex = 0
let deleting = false

const typingElement = document.querySelector(".typing")

function type(){

let currentWord = words[wordIndex]

if(!deleting){

charIndex++

if(charIndex === currentWord.length){
deleting = true
}

}else{

charIndex--

if(charIndex === 0){
deleting = false
wordIndex = (wordIndex + 1) % words.length
}

}

typingElement.textContent = currentWord.substring(0,charIndex)

setTimeout(type,120)

}

type()


/* ---------------- CURSOR LIGHT ---------------- */

const light = document.getElementById("cursor-light")

document.addEventListener("mousemove",(e)=>{

light.style.left = e.clientX + "px"
light.style.top = e.clientY + "px"

})


/* ---------------- THREE.JS SPACE BACKGROUND ---------------- */

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth / window.innerHeight,
0.1,
1000
)

const renderer = new THREE.WebGLRenderer({
canvas: document.getElementById("bg"),
alpha:true
})

renderer.setSize(window.innerWidth, window.innerHeight)

const geometry = new THREE.BufferGeometry()

const vertices = []

for(let i=0;i<5000;i++){

vertices.push(
Math.random()*2000-1000,
Math.random()*2000-1000,
Math.random()*2000-1000
)

}

geometry.setAttribute(
"position",
new THREE.Float32BufferAttribute(vertices,3)
)

const material = new THREE.PointsMaterial({
color:0x22d3ee,
size:2
})

const particles = new THREE.Points(geometry,material)

scene.add(particles)

camera.position.z = 400

function animate(){

requestAnimationFrame(animate)

particles.rotation.y += 0.0005

renderer.render(scene,camera)

}

animate()


/* -------- RESIZE FIX -------- */

window.addEventListener("resize",()=>{

camera.aspect = window.innerWidth / window.innerHeight
camera.updateProjectionMatrix()

renderer.setSize(window.innerWidth, window.innerHeight)

})



function showCert(type){

const box = document.getElementById("certificateBox");
const title = document.getElementById("certTitle");
const image = document.getElementById("certImage");
const pdf = document.getElementById("certPDF");

box.style.display = "flex";

if(type === "autocad"){

title.innerText = "AutoCAD Certificate";

image.src = "certificates/autocad.png";

pdf.href = "certificates/autocad.pdf";

}

if(type === "gemini"){

title.innerText = "Google Gemini Certificate";

image.src = "certificates/gemini.png";

pdf.href = "certificates/gemini.pdf";

}

}
function closeCert(){

const box = document.getElementById("certificateBox");

box.style.display = "none";

}