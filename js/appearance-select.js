appearanceImageInput.onchange = evt => {
    const [file] = appearanceImageInput.files
    if (file) {
      appearanceImage.src = URL.createObjectURL(file)
    }
  }

  appearanceSelect.onchange = evt => {
    if (appearanceSelect.value == "image") {
      appearanceImage.style.display = "block";
      appearanceText.style.display = "none";
    }
    else {
      appearanceImage.style.display = "none";
      appearanceText.style.display = "block";
    }
  }

  appearanceSelect.onchange()