export default {
  updated(el, binding, vnode, prevVnode) {
    document.addEventListener("click", (ev)=>{
      if(!(el === ev.target || el.contains(ev.target))){
        binding.value()
      }
    })
  },
}