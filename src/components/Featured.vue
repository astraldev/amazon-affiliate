<template>
  <div class="alignleft">
  </div>
</template>
<script>
export default {
  data(){
    const banners = [
      "//rcm-na.amazon-adsystem.com/e/cm?o=1&p=12&l=ur1&category=electronics&banner=1RJ5QAT5B55ECPXSXB82&f=ifr&linkID=7a234968fad488e583fbb7f31545da4b&t=edemecommerce-20&tracking_id=edemecommerce-20",
    ]
    return {
      banner: 0,
      banners: banners
    }
  },
  mounted(){
    const script_1 = `
      amzn_assoc_ad_type = "banner";
	    amzn_assoc_marketplace = "amazon";
	    amzn_assoc_region = "US";
	    amzn_assoc_placement = "assoc_banner_placement_default";
	    amzn_assoc_campaigns = "electronics";
	    amzn_assoc_banner_type = "category";
	    amzn_assoc_p = "12";
	    amzn_assoc_isresponsive = "false";
	    amzn_assoc_banner_id = "1RJ5QAT5B55ECPXSXB82";
	    amzn_assoc_width = "300";
	    amzn_assoc_height = "250";
	    amzn_assoc_tracking_id = "edemecommerce-20";
	    amzn_assoc_linkid = "24cfa055c90c781787877b1a0b2dafb1";
    `
    const sc_1 = document.createElement("script")
    sc_1.innerHTML = script_1
    const sc_2 = document.createElement('script');
    sc_2.src = "//z-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&Operation=GetScript&ID=OneJS&WS=1"
  }
}
</script>
<style lang="sass" scoped>
img[id *="amxnBanners"]
  @apply w-screen h-screen
</style>