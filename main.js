document.addEventListener("DOMContentLoaded", function() {
    let borderRadiusInput = document.getElementById("border-radius");
    let opacityInput = document.getElementById("opacity");
    
    if (localStorage.getItem("borderRadiusValue")) {
      borderRadiusInput.value = localStorage.getItem("borderRadiusValue");
      applyBorderStyle();
    } else {
      borderRadiusInput.value = 0;
    }
    
    if (localStorage.getItem("opacityValue")) {
      opacityInput.value = localStorage.getItem("opacityValue");
      applyOpacityStyle();
    } else {
      opacityInput.value = 1;
    }
    
    borderRadiusInput.addEventListener("input", function() {
      applyBorderStyle();
      localStorage.setItem("borderRadiusValue", this.value);
    });
    
    opacityInput.addEventListener("input", function() {
      applyOpacityStyle();
      localStorage.setItem("opacityValue", this.value);
    });
    
    function applyBorderStyle() {
      let boxes = document.querySelectorAll(".box");
      let borderRadiusValue = borderRadiusInput.value + "px";
      boxes.forEach(function(box) {
        box.style.borderRadius = borderRadiusValue;
      });
    }

    function applyOpacityStyle() {
      let boxes = document.querySelectorAll(".box");
      let opacityValue = opacityInput.value;
      boxes.forEach(function(box) {
        box.style.opacity = opacityValue;
      });
    }
  });
  