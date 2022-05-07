class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu)
    this.navList = document.querySelector(navList)
    this.navLinks = document.querySelectorAll(navLinks)
    this.activeClass = 'active-mbm'

    this.handleClick = this.handleClick.bind(this)
  }

  animatedLinks() {
    this.navLinks.forEach(link => {
      link.style.animation
        ? (link.style.animation = '')
        : (link.style.animation = 'navLinkFade 0.5 ease-in forwards 0.3s')
    })
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass)
    this.animatedLinks()
  }

  addClickEvent() {
    this.mobileMenu.addEventListener('click', this.handleClick)
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent()
    }
    return this
  }
}

const mobileNavbar = new MobileNavbar(
  '.mobile-menu',
  '.nav-list',
  '.nav-list li'
)

mobileNavbar.init()

//Gallery SCRIPT
const filterItem = document.querySelector('.items')
const filterImg = document.querySelectorAll('.image')

window.onload = () => {
  //once window loaded
  filterItem.onclick = selectedItem => {
    //when user clicked on fileterItem div
    if (selectedItem.target.classList.contains('item')) {
      //if user click element has .item class
      filterItem.querySelector('.active').classList.remove('active') //remove the active class wich is in the first element
      selectedItem.target.classList.add('active') //add that class on user selected element item
      let filterName = selectedItem.target.getAttribute('data-name') //getting data-name value of the user selected item and storing in a filter name variable or user item data-name value equal to "all"
      filterImg.forEach(image => {
        let filterImages = image.getAttribute('data-name')
        if (filterImages == filterName || filterName == 'All') {
          image.classList.remove('hide')
          image.classList.add('show')
        } else {
          image.classList.add('hide')
          image.classList.remove('show')
        }
      })
    }
  }
  for (let index = 0; index < filterImg.length; index++) {
    filterImg[index].setAttribute('onclick', 'preview(this)') //adding onclick attribute in all avaibale images
  }
}

//preview script
const previewBox = document.querySelector('.preview-box')
previewImg = previewBox.querySelector('img')
categoryName = previewBox.querySelector('.prev-title p')
closeIcon = previewBox.querySelector('.close-icon')
shadow = document.querySelector('.shadow')

//fullscreen function
function preview(element) {
  let selectedPrevImg = element.querySelector('img').src // getting user clicked img
  let selectedImgCategory = element.getAttribute('data-name') // getting user clicked data-name
  categoryName.textContent = selectedImgCategory //passing the data-name value to category name variable
  previewImg.src = selectedPrevImg //passing the user clicked img source in the preview image source
  previewBox.classList.add('show') //show the preview box
  shadow.classList.add('show') //hide the light of background in preview
  closeIcon.onclick = () => {
    // if user click on close icon
    shadow.classList.remove('show') //hide the light of background in preview
    previewBox.classList.remove('show') //hide the preview box
  }
}
