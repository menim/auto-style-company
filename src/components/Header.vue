<script>
import BaseContainer from "./BaseContainer";
import BaseTaxiSign from "./BaseTaxiSign";
import BaseButtonTelephone from "./BaseButtonTelephone";
import BaseForm from "./BaseForm";
import HeaderHeadline from "./HeaderHeadline";
import HeaderSubheadline from "./HeaderSubheadline";
import Navbar from "./Navbar";

export default {
  name: "Header",
  components: {
    BaseContainer,
    BaseTaxiSign,
    BaseButtonTelephone,
    BaseForm,
    HeaderHeadline,
    HeaderSubheadline,
    Navbar
  }
};
</script>
<template>
  <header class="header">
    <Navbar class="header__nav" />
    <BaseContainer class="header__container">
      <div class="row align-items-center">
        <div class="col-md-6 col-xl-4 offset-xl-1">
          <BaseTaxiSign class="header__taxi-sign" />
          <HeaderHeadline />
          <HeaderSubheadline />
        </div>
        <div class="col-md-6 col-xl-5 offset-xl-1">
          <BaseButtonTelephone class="header__button-telephone" />
          <BaseForm />
        </div>
      </div>
    </BaseContainer>
  </header>
</template>
<style>
.header {
  background-image: url("../assets/images/cars-bg-sm.jpg");
  background-color: #040819;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  position: relative;
  width: 100%;
  padding-bottom: 76px;
}

.header::after {
  content: "";
  background: linear-gradient(
    to bottom,
    rgba(4, 8, 25, 0.9) 0%,
    rgba(4, 8, 25, 0.69) 100%
  );
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.73;
  z-index: 0;
}

.header__nav {
  margin-bottom: 50px;
}

.header__container {
  position: relative;
  z-index: 1;
}

.header__taxi-sign {
  margin-bottom: 22px;
}

.header__button-telephone {
  margin-bottom: 32px;
}

@media screen and (min-width: 768px) {
  .header {
    text-align: left;
  }

  .header__button-telephone {
    display: none;
  }

  .header__taxi-sign {
    display: none;
  }
}
@media screen and (min-width: 768px) {
  .header {
    background-image: url("../assets/images/cars-bg-md.jpg");
  }
}

@media screen and (min-width: 1200px) {
  .header {
    background-image: url("../assets/images/cars-bg.jpg");
  }
}
</style>
