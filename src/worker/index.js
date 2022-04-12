const modules = import.meta.glob('./*js')

onmessage = function(e) {
  console.log(e.data, modules)
}