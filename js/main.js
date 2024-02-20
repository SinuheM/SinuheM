document.addEventListener("DOMContentLoaded", function () {
  function loadUser() {
    fetch("js/work.json")
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(function (data) {
        var template = document.getElementById("template").innerHTML;
        Mustache.parse(template); // optional, speeds up future uses
        data.work.forEach(function (el) {
          el.active = el.status != "active";
        });
        var rendered = Mustache.render(template, data);
        document.getElementById("projects-target").innerHTML = rendered;
      })
      .catch(function (error) {
        console.error("Error fetching data:", error);
      });
  }
  loadUser();

  document.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        document.querySelector(hash).scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  document.querySelectorAll(".infinite-toggle").forEach(function (el) {
    el.addEventListener("mouseenter", function () {
      this.children[0].classList.remove("animated");
    });
    el.addEventListener("mouseleave", function () {
      this.children[0].classList.add("animated");
    });
  });

  // Toggle Nav on mobile
  document.getElementById("toggleNav").addEventListener("click", function (ev) {
    ev.preventDefault();
    document.querySelector("nav").classList.toggle("active");
  });

  document.querySelectorAll("nav ul a").forEach(function (link) {
    link.addEventListener("click", function () {
      document.querySelectorAll("nav, nav a").forEach(function (el) {
        el.classList.remove("active");
      });
      this.classList.add("active");
    });
  });

  // When the user scrolls down 50px from the top of the document, resize the header's font size
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    var sections = [
      { id: "#nav-home", position: -50 },
      {
        id: "#nav-work",
        position: document.getElementById("work").offsetTop - 100,
      },
      {
        id: "#nav-cont",
        position: document.getElementById("contact").offsetTop - 200,
      },
    ];

    document.querySelectorAll("nav, nav a").forEach(function (el) {
      el.classList.remove("active");
    });

    for (var i = sections.length; i > 0; i--) {
      var section = sections[i - 1];
      if (
        document.body.scrollTop > section.position ||
        document.documentElement.scrollTop > section.position
      ) {
        document.querySelector(section.id).classList.add("active");
        break;
      }
    }
  }
});
