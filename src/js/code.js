const btnDepartments = document.getElementById("btn-departments"),
  btnCloseMenu = document.getElementById("btn-menu-close"),
  grid = document.getElementById("grid"),
  containerSubcategories = document.querySelector(
    "#grid .container-subcategories"
  ),
  isDeviceMobile = () => window.innerWidth <= 800;
btnDepartments.addEventListener("mouseover", () => {
  if (!isDeviceMobile()) {
    grid.classList.add("active");
  }
});
grid.addEventListener("mouseleave", () => {
  if (!isDeviceMobile()) {
    grid.classList.remove("active");
  }
});

let previos = document.querySelector(".active");
document.querySelectorAll("#menu .categories a").forEach((element) => {
  element.addEventListener("mouseenter", (e) => {
    //console.log(e.target.dataset.categories);

    if (!isDeviceMobile()) {
      document
        .querySelectorAll("#menu .subcategories")
        .forEach((categories) => {
          if (e.target.dataset.categories == categories.dataset.categories) {
            previos.classList.remove("active");

            categories.classList.add("active");
            previos = categories;
          }
        });
    }
  });
});
/**
 * EventLisemers mobile
 */
document.querySelector("#btn-menu-bars").addEventListener("click", (e) => {
  e.preventDefault(); //envitas que cambie la direccion

  const buttomMenu = document.querySelector("#menu .container-links-nav");
  buttomMenu.classList.toggle("active");

  /*
  if (buttomMenu.className == "container container-links-nav active") {
    document.querySelector("body").style.overflow = "hidden";
  } else {
    document.querySelector("body").style.overflow = "visible";
  }*/
});

//click buttom departament(mobile)
btnDepartments.addEventListener("click", (e) => {
  e.preventDefault();
  grid.classList.add("active");
  btnCloseMenu.classList.add("active");
});

//btn to return in subcategories

document
  .querySelector("#grid .categories .btn-toreturn")
  .addEventListener("click", (e) => {
    e.preventDefault();
    btnCloseMenu.classList.remove("active");
    grid.classList.remove("active");
  });

document
  .querySelectorAll("#menu .container-categories a")
  .forEach((elements) => {
    elements.addEventListener("click", (e) => {
      if (isDeviceMobile) {
        containerSubcategories.classList.add("active");
        document
          .querySelectorAll("#menu .subcategories")
          .forEach((categorie) => {
            categorie.classList.remove("active");
            if (categorie.dataset.categories == e.target.dataset.categories) {
              categorie.classList.add("active");
            }
          });
      }
    });
  });

//btn to return in subcategories

document
  .querySelectorAll("#grid .container-subcategories .btn-toreturn")
  .forEach((buttom) => {
    buttom.addEventListener("click", (e) => {
      e.preventDefault();
      containerSubcategories.classList.remove("active");
    });
  });

btnCloseMenu.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelectorAll("#menu .active").forEach((element) => {
    element.classList.remove("active");
  });
  //document.querySelector("body").style.overflow = "visible";
});
