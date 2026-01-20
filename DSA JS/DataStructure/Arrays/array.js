let obj = {
  name: 'Umarkhan',
  show() {
    setTimeout(function () {
      console.log(this.name)
    }, 0)
  },
}
obj.show()
