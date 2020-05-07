<template>
  <div class="container">
    <VueFirework></VueFirework>

    <div class="intro">
      <h1>To use the firework component developed by vue, click on the component.</h1>
      <p>Try clicking on the screen</p>
    </div>

    <h2>🔥props</h2>
    <li>[el].   The element that needs to bind firework effects.</li>
    <li>[fireCanvasStyle].   Configuration of firework left and top properties.</li>

    <h2>🎉use</h2>
    <li>yarn add vue-firework</li>
    <li>import Vue from 'vue'</li>
    <li>import VueFirework from 'vue-firework'</li>
  </div>
</template>

<script>
import VueFirework from '../src/firework.vue';

export default {
  components: { VueFirework },
};
</script>

<style>
html,
body {
  height: 100%;
  font-family: "Pacifico", cursive;
  font-family: "Fredoka One", cursive;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  /* width: 600px; */
  height: 600px;
  color: #162447;
  /* background-color: #f8b195; */
}

.intro {
  text-align: center;
}
</style>
