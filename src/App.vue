<template>
<div id="app">
<SiteHeader />
<router-view />
<FooterBar />
</div>
</template>


<script>
import SiteHeader from './components/SiteHeader.vue'
import FooterBar from './components/FooterBar.vue'
export default { components: { SiteHeader, FooterBar } }
</script>