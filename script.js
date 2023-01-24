let searchbar = document.getElementById("searchbar")
//let searchitem = searchbar.value   this does not work
let url1 = "https://loremflickr.com/320/240/"
const loadterminate = () => {
    let loading = document.getElementById('loading')
    loading.setAttribute("style", "display: none;")
    console.log(loading)
}
const clickhandler = () => {
    let searchitem = searchbar.value
    // it works only in function 
    let urlupdated = url1 + searchitem
    let image = document.createElement('img')
    image.setAttribute("src", urlupdated)
    let imagecontainer = document.getElementById('imagecontainer')
    imagecontainer.append(image)
    let loading = document.getElementById('loading')
    loading.setAttribute("style", "display: inline;")
    setTimeout(loadterminate, 1500)
  // console.log(loading)
}