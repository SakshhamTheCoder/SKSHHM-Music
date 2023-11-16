function isTouchDevice(){
  return window.ontouchstart !== undefined;
}

document.querySelector('#album-art-image').addEventListener('load', () => {
  if(!isTouchDevice()){
  

    let cordinates = document.querySelector('#album-art-image').getBoundingClientRect();
    let imageX = (cordinates.left + window.scrollX + cordinates.right) / 2;
    let imageY = (cordinates.top + window.scrollY + cordinates.bottom) / 2;
  
    const ANGLE_COMPENSATION = 80;
    document.querySelector('.releases').addEventListener('mousemove', (event) => {
      let mouseX = event.clientX;
      let mouseY = event.clientY;
  
      let xOffset = imageX - mouseX;
      let yOffset = imageY - mouseY;
  
      let xRotationAngle = yOffset / ANGLE_COMPENSATION;
      let yRotationAngle = xOffset / ANGLE_COMPENSATION;
  
      document.querySelector('#album-art-image').style.transform = "rotateX(" + xRotationAngle + "deg) rotateY(" + yRotationAngle + "deg) "
  
    })
  }})