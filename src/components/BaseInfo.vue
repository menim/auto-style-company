<template>
  <div class="info">
    <img src="../assets/images/info-icon.svg" alt class="info__image" />
    <p class="info__description">
      <slot></slot>
    </p>
  </div>
</template>
<style>
.info {
  color: #edf2f4;
  text-align: center;
}

.info__image {
  margin-bottom: 22px;
}

.info__description {
  font-size: 1.0625rem;
  font-weight: 700;
  line-height: 1.4;
}
</style>
