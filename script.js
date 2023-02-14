let searchbar = document.getElementById("searchbar")
let searchitem = searchbar.value
let url1 = "https://source.unsplash.com/featured/320x240?"
const loadterminate = () => {
  let images = document.getElementById('images')
  images.setAttribute("class", "invisible")
}
const clickhandler = (e) => {
  searchbar.value = ""
  let urlupdated = url1 + searchitem + e
  let image = document.createElement('img')
  image.setAttribute("src", urlupdated)
  let imagecontainer = document.getElementById('imagecontainer')
  imagecontainer.prepend(image)
  let images = document.getElementById('images')
  images.setAttribute("class", "loading")
  setTimeout(loadterminate, 1500)
}