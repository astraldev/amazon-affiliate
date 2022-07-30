<template>
  <div class="h-screen w-screen bg-gradient-to-tr from-blue-400 to-cyan-500">
    <div class="h-1/2 justify-end flex flex-col">
      <h2 class="text-5xl md:text-6xl md:py-4 pl-8 md:pl-10 text-white font-exo font-bold text-left">Ed's Recommends</h2>
      <span ref="typed" class="text-sm h-16 inline w-4/5 font-inconsolata text-left self-center uppercase text-gray-100 pl-9 mr-auto"></span>
    </div>
    <div class="h-1/2">

    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      string: "recommending the best products availiable for you."
    }
  },
  mounted(){
    function animateLetter(el, tm) {
      let element = el;
      el.style.display = "none";
      el.style.transition = "display 200ms linear";
      setTimeout(function () {
        element.style.display = "inline";
      }, tm);
    }
    let innerText = this.string;
    let span = this.$refs.typed
    let data_used_count = parseInt(span.getAttribute("data-used-count"));
    span.setAttribute("data-text", innerText);
    span.setAttribute("data-used-count", data_used_count++ || 1);
    data_used_count = parseInt(span.getAttribute("data-used-count"));
    span.innerText = "";
    for (var i = 0; i < innerText.length; i++) {
      var sp = document.createElement("span");
      sp.className = "fade-in";
      sp.innerText = innerText[i];
      span.appendChild(sp);
      animateLetter(sp, 100 * i);
    }
  },
}
</script>
<style scoped>
</style>