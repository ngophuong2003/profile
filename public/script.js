// Hien category khi an vao icon
document.addEventListener("DOMContentLoaded", () => {
  // Mo overlay
  document.getElementById("menuIcon").addEventListener("click", function () {
    document.getElementById("myCat").style.width = "100%";
  });

  // Dong overlay
  document
    .querySelector(".overlay .closebtn")
    .addEventListener("click", function () {
      document.getElementById("myCat").style.width = "0";
    });
});

// Chuyen huong den muc khi nhan vao category
document.addEventListener("DOMContentLoaded", function () {
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId + "_section");
    if (section) {
      document.getElementById("myCat").style.width = "0";
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  const catItems = document.querySelectorAll(".category");
  catItems.forEach(function (catItem) {
    catItem.addEventListener("click", function () {
      const sectionId = this.id;
      scrollToSection(sectionId);
    });
  });
});

// Scroll to top khi nhan vao trang chu
document.addEventListener("DOMContentLoaded", function () {
  var home = document.querySelector("#home");
  home.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

// hien va an header khi scroll
document.addEventListener("DOMContentLoaded", function () {
  let prevScrollpos = window.scrollY;
  var nav = document.querySelector("#headerTop");
  window.addEventListener("scroll", function () {
    if (prevScrollpos < window.scrollY) {
      nav.style.top = "-50px";
    } else {
      nav.style.top = "0";
    }
    prevScrollpos = window.scrollY;
  });
});

// Modal Imgage
document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");
  var images = document.querySelectorAll("#myImg");
  console.log(images);
  images.forEach(function (img) {
    img.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.src;
    });
  });
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});
