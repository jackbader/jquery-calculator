$( document ).ready(function() {

  let screentext = ""

  // add to cart
  $('span').click((event) => {
    event.preventDefault()

    let clicked = event.target.innerHTML
    let text = event.target.innerHTML

    if (clicked === "C") {
      console.log("clicked c")
      $('#screen').text("")
      screentext = ""
      return
    }

    if (clicked === "=") {

      console.log(screentext, screentext.indexOf("+"))

      if (screentext.indexOf("+") !== -1) {
        console.log('contains +')
        text = screentext
        let array = text.split("+")

        let test = 0
        for (let i = 0; i < array.length; i++) {
          let num = parseInt(array[i])
          test = num + test
        }
        $('#screen').text(test)
        screentext = ""
        return
      }

      if (screentext.indexOf("x") !== -1) {
        console.log('contains x')
        text = screentext
        let array = text.split("x")
        console.log(array)
        let test = 1
        for (let i = 0; i < array.length; i++) {
          let num = parseInt(array[i])
          test = num * test
        }
        $('#screen').text(test)
        screentext = ""
        return
      }

      if (screentext.indexOf("÷") !== -1) {
        console.log('contains divided')
        text = screentext
        let array = text.split("÷")
        console.log(array)

        let test = 1
        for (let i = 0; i < array.length; i++) {
          let num = parseInt(array[i])
          if (i == 0) {
            test = num / test
          } else {
            test = test / num
          }
        }
        $('#screen').text(test)
        screentext = ""
        return
      }

    }

    text = screentext + text

    screentext = text

    $('#screen').text(text)


  })
    console.log( "ready!" );
});
