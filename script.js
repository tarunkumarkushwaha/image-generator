let searchbar = document.getElementById("searchbar")
let searchitem = searchbar.value
let url1 = "https://source.unsplash.com/featured/320x240?"
const loadterminate = () => {
  let images = document.getElementById('images')
  images.setAttribute("class", "invisible")
}
var Sno = 1
let noOfImageToBeLoaded = 9

const updater = (e) => {
  Sno +=1
  console.log("load new image",Sno,e)
  searchbar.value = ""
  let loadingimage = document.getElementById('images')
  loadingimage.setAttribute("class", "loading")
  setTimeout(loadterminate, 1500)
  let urlupdated = url1 + searchitem + e + "&" + Sno
  let image = document.createElement('img')
  image.setAttribute("src", urlupdated)
  let imagecontainer = document.getElementById('imagecontainer')
  imagecontainer.prepend(image)
}

const clickhandler = (e) => {
  for (let i = 0; i < noOfImageToBeLoaded; i++) {
    updater(e)
    
  }
}

const scrollhandler = () => {
  let scrolltop = document.documentElement.scrollTop
  let totalheight = document.documentElement.scrollHeight
  let windowheight = window.innerHeight
  let position = windowheight + scrolltop
  if (scrolltop > 400) {
    if (totalheight < position) {
      updater()
    }
  }
}

window.addEventListener('scroll', scrollhandler)
