AOS.init();

$(window).on("load", function () {
  $(".loader").fadeOut(1500);
});

$(document).ready(function () {
  $("#menubar").click(function () {
    $(".nav-links").slideToggle("slow");
  });
});

var mq = window.matchMedia("(max-width: 576px)");
if (mq.matches) {
  $(".nav-links ul li").click(function () {
    $(".nav-links").slideToggle("slow");
  });
}

$({ Counter: 0 }).animate(
  {
    Counter: $(".Projects").text(),
  },
  {
    duration: 6000,
    easing: "swing",
    step: function () {
      $(".Projects").text(Math.ceil(this.Counter));
    },
  }
);

$({ Counter: 0 }).animate(
  {
    Counter: $(".Coffee").text(),
  },
  {
    duration: 6000,
    easing: "swing",
    step: function () {
      $(".Coffee").text(Math.ceil(this.Counter));
    },
  }
);

$({ Counter: 0 }).animate(
    {
      Counter: $(".Clients").text(),
    },
    {
      duration: 6000,
      easing: "swing",
      step: function () {
        $(".Clients").text(Math.ceil(this.Counter));
      },
    }
  );
  
  $({ Counter: 0 }).animate(
    {
      Counter: $(".ActiveClients").text(),
    },
    {
      duration: 6000,
      easing: "swing",
      step: function () {
        $(".ActiveClients").text(Math.ceil(this.Counter));
      },
    }
  );
  

