var menuLinks = [
    { text: "home", href: "#home" },
    {
      text: "products",
      href: "#",
      id: "home",
      subLinks: [
        { text: "all", href: "/catalog/all" },
        { text: "top selling", href: "/catalog/top" },
        { text: "search", href: "/catalog/search" },
      ],
    },
    {
      text: "cart",
      href: "#",
      id: "cart",
      subLinks: [
        { text: "new", href: "/orders/new" },
        { text: "pending", href: "/orders/pending" },
        { text: "history", href: "/orders/history" },
      ],
    },
    {
      text: "sign up ",
      id: "signUp",
      href: "#",
      subLinks: [
        { text: "profile", href: "/account/profile" },
        { text: "sign out", href: "/account/signout" },
      ],
    },
  ];
  
  let topMenuEl = document.getElementById("top-menu");
  topMenuEl.style.height = "100%";
  topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
  topMenuEl.classList.add("flex-around");
  
  for (let i = 0; i < menuLinks.length; i++) {
    let link = document.createElement("a");
    link.setAttribute("href", menuLinks[i].href);
    link.setAttribute('id', menuLinks[i].id)
    link.textContent = menuLinks[i].text;
    topMenuEl.append(link);
  }
  
  const subMenuEl = document.querySelector("#sub-menu");
  
  subMenuEl.style.height = "100%";
  
  subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
  
  subMenuEl.classList.add("flex-around");
  
  subMenuEl.style.position = "absolute";
  
  subMenuEl.style.top = "0";
  
  const topMenulinks = topMenuEl.querySelectorAll("a");
  topMenuEl.addEventListener("click", (event) => {
      const clickedLink = event.target;
      console.log(event.target.textContent);
  
      const LinkText = clickedLink.textContent.toLowerCase();
      const linkObject = menuLinks.find((link) => link.text === LinkText);
  
     event.preventDefault();
  
    
     if (clickedLink.tagName !== "A") return;
  
    if (clickedLink.classList.contains("active")) {
      clickedLink.classList.remove("active");
      subMenuEl.style.top = "0";
    } else {
      document
        .querySelectorAll("#top-menu a")
        .forEach((a) => a.classList.remove("active"));
      clickedLink.classList.add("active");
      if (linkObject.subLinks) {
        subMenuEl.style.top = "100%";
        buildSubmenu(linkObject.subLinks);
      } else {
        subMenuEl.style.top = "0";
      }
    }
  });
  
  function buildSubmenu(sublinks) {
    subMenuEl.innerHTML = "";
  
    sublinks.forEach((link) => {
      const aElement = document.createElement("a");
      aElement.href = link.ref;
      aElement.textContent = link.text;
      subMenuEl.appendChild(aElement);
    });
  }


  
  subMenuEl.addEventListener("click", (event) => {
    event.preventDefault();
  
    if (event.target.targetName !== "A") return;
  
    console.log("submenu link clicked", event.target.textContent);
  });
  let SubmitBtn = document.querySelector("form button[type = submit]")
  console.log(SubmitBtn)
  SubmitBtn.addEventListener("click", (event)=>{
event.preventDefault()
let firstName = document.getElementById('fname')
let lastName = document.getElementById('lname')
let Email = document.getElementById('email')
if( firstName.value==="" || firstName.value ===null ||lastName.value==="" || lastName.value ===null|| Email.value==="" || Email.value ===null){
window.alert('this is required')
}else{
    window.alert('Thank you for submitting your informations')
}

})
let cartbtn1 = document.getElementById("addToCart1")
console.log(cartbtn1)

let cartEl = document.getElementById('cart')
let counter = document.createElement('span')
topMenuEl.appendChild(counter)
counter.textContent = '1'
console.log(cartEl)

cartbtn1.addEventListener('click',(event)=>{
    event.preventDefault()

    let count = 0;

    count++;

    counter.textContent = count;

    
})
