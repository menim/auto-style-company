<template>
  <p class="agreement-message">
    <sup class="agreement-message__asterisk">*&nbsp;</sup>
    <slot></slot>
  </p>
</template>
<style>
.agreement-message {
  color: #263651;
  font-weight: 300;
  font-size: 0.8125rem;
  line-height: 1.3;
}

.agreement-message__asterisk {
  color: red;
}
</style>
