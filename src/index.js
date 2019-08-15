function extract(mode, event) {
  eval(`
    function a() {
      var ${mode} = event
      return ${mode}
    }
  `)
  return a()
}
export default {
  extract
}
