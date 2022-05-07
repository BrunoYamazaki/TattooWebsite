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
          image.classList.add('show')
        } else {
          image.classList.add('hide')
          image.classList.remove('show')
        }
      })
    }
  }
}
