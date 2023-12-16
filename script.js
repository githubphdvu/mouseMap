document.addEventListener('mousemove',event=>{
  const r = event.pageX / window.innerWidth * 255//or clientX,clientY
  const b = event.pageY / window.innerHeight *255
  document.body.style.backgroundColor = `rgb(${r},0,${b})`
})