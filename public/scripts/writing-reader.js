fetch("../text/stories/vanille.rtf")
  .then((res) => res.text())
  .then((text) => {
    console.log(text);
   })
  .catch((e) => console.error(e));