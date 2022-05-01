<template>
   <Header />
   <router-view />
   <Footer />

</template>

<script>
import Header from './views/layout/header.vue'
import Footer from './views/layout/footer.vue'
export default {
  name: 'App',
  components: { Footer, Header },
}
</script>
