<template>
  <q-page class="wrapper">
    <q-img
      src="https://s1.gifyu.com/images/vivi-bex.png"
      height="100%"
      width="100%"
      contain
    />
  </q-page>
</template>

<script lang="ts">
import ExampleComponent from 'components/CompositionComponent.vue';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'PageIndex'
});
</script>

<style scoped>
.wrapper {
  width: 100vw;
  height: 100vh;
  background: url('https://s1.gifyu.com/images/love95e1650272602d39.gif');
}
</style>
