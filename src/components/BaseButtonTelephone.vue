<template>
  <a
    class="button-telephone"
    href="https://api.whatsapp.com/send?phone=79166677773"
  >+7 (916) 667 77 73</a>
</template>
<style>
.button-telephone {
  background-color: transparent;
  border: 1px solid currentColor;
  border-radius: 50px;
  color: #fff;
  display: inline-block;
  font-size: 1rem;
  font-weight: 500;
  line-height: 56px;
  text-align: center;
  text-decoration: none;
  padding: 0;
  height: 56px;
  width: 206px;
}

.button-telephone::before {
  content: "";
  background-image: url("../assets/images/whatsapp-icon.png");
  display: inline-block;
  height: 20px;
  margin-right: 9px;
  vertical-align: text-bottom;
  width: 20px;
}
</style>
