class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu)
    this.navList = document.querySelector(navList)
    this.navLinks = document.querySelectorAll(navLinks)
    this.activeClass = 'active'

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

/* var menuitem = document.getElementById('menuitem')
menuitem.style.maxHeight = '0px'

function menutoggle() {
  if (menuitem.style.maxHeight == '0px') {
    menuitem.style.maxHeight = '200px'
  } else {
    menuitem.style.maxHeight = '0px'
  }
} */