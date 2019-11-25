<script>
import EventBus from '../eventBus';
export default {
  name: "Button",
  methods: {
    emitShowModal() {
      EventBus.$emit('showModal')
    }
  }
}
</script>
<template>
  <button @click="emitShowModal" class="button">
    <slot></slot>
  </button>
</template>
<style>
.button {
  background-color: #1650fe;
  box-shadow: 0px 5px 0px rgba(32, 32, 32, 0.17);
  border: 0;
  border-radius: 2px;
  color: #fff;
  font-size: 0.875rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
  max-width: 276px;
  width: 100%;
  height: 48px;
  transition: background-color 300ms ease-in, box-shadow 300ms ease-in;
}

.button:hover {
  background-color: #4a78ff;
  box-shadow: 0px 5px 0px rgba(32, 32, 32, 0.39);
}
</style>
