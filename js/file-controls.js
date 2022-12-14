saveButton.onclick = () => {
    const data = new FormData(csForm)
    const params = new URLSearchParams(data)
    const str = params.toString()
    var link = document.createElement("a")
    link.href = window.URL.createObjectURL(new Blob([str], { type: "text/plain" }))
    link.download = "Carbon" + (data.has("name") ? ("_" + data.get("name").split(/\s/)[0]) : "" ) + ".ccs"
    link.click()
  }

  loadButton.onclick = () => {
    var fileInput = document.createElement("input")
    fileInput.type = "file"
    fileInput.accept = "text/ccs"

    fileInput.onchange = () => {
      var file = fileInput.files[0]
      var reader = new FileReader()
      
      reader.onload = () => {
        const params = new URLSearchParams(reader.result)
        params.forEach((value, key) => {
          document.getElementsByName(key).forEach((element) => {
            element.value = value
          })
        })

        appearanceSelect.onchange()
      }

      reader.readAsText(file, "UTF-8")
    }

    fileInput.click()
  }
  
  exportButton.onclick = () => {
    window.print()
  }
