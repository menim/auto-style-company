<template>
  <button class="hamburger-btn" @click="$emit('toggleMenu')">
    <span class="hamburger-btn__line"></span>
    <span class="hamburger-btn__line"></span>
    <span class="hamburger-btn__line"></span>
  </button>
</template>
<style scoped>
.hamburger-btn {
  background-color: transparent;
  border: 0;
  padding: 10px 0;
  height: 40px;
  width: 48px;
}

.hamburger-btn__line {
  display: block;
  width: 20px;
  height: 2px;
  background-color: #fff;
  margin-bottom: 5px;
  margin-left: auto;
  margin-right: auto;
}

.hamburger-btn__line:last-child {
  margin-bottom: 0;
}

@media screen and (min-width: 768px) {
  .hamburger-btn {
    display: none;
  }
}
</style>
