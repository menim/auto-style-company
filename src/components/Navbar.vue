<script>
import BaseContainer from "./BaseContainer";
import BaseLogo from "./BaseLogo";
import NavbarMenu from "./NavbarMenu";

export default {
  name: "Navbar",
  components: {
    BaseContainer,
    BaseLogo,
    NavbarMenu
  }
};
</script>
<template>
  <nav class="nav">
    <BaseContainer class="nav__container">
      <div class="row justify-content-between align-items-center">
        <div class="col-6 col-sm-2">
          <a href="/">
            <BaseLogo class="logo--small" />
          </a>
        </div>
        <NavbarMenu class="col-6 col-sm-2 col-md-10 col-lg-9" />
      </div>
    </BaseContainer>
  </nav>
</template>
<style scoped>
.nav {
  background-color: #040819;
  font-size: 1rem;
  text-align: left;
  height: 72px;
  width: 100%;
  position: relative;
  z-index: 2;
}

.nav__container {
  height: 100%;
  padding-top: 16px;
}

@media screen and (min-width: 768px) {
  .nav__container {
    padding-top: 0;
  }
}
</style>
