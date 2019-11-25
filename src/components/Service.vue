<script>
import BaseContainer from "./BaseContainer";
import BaseHeadline from "./BaseHeadline";
import ServiceList from "./ServiсeList";

export default {
  name: "Service",
  components: {
    BaseContainer,
    BaseHeadline,
    ServiceList
  }
};
</script>

<template>
  <div class="service">
    <div class="service__head">
      <div class="service__head-left"></div>
      <div class="service__head-triangle"></div>
      <div class="service__head-right"></div>
    </div>
    <BaseContainer>
      <BaseHeadline class="service__section-headline">В состав услуги входит:</BaseHeadline>
      <ServiceList />
    </BaseContainer>
  </div>
</template>

<style scoped>
.service {
  background-image: url("../assets/images/service-bg-sm.jpg");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100% 100%;
  position: relative;
  padding: 60px 0;
}

.service::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  height: 27px;
  width: 100%;
}

.service__section-headline {
  padding: 0 45px;
}

.service__head {
  background-color: transparent;
  height: 27px;
  width: 100%;
  display: flex;
  position: absolute;
  top: -27px;
}

.service__head-left {
  background-color: #fff;
  width: calc(50% - 26px);
  height: 100%;
  position: relative;
}
.service__head-triangle {
  width: 0;
  height: 0;
  border-left: 26px solid transparent;
  border-right: 26px solid transparent;
  border-top: 26px solid #transparent;
}

.service__head-right {
  background-color: #fff;
  width: calc(50% - 26px);
  height: 100%;
  position: relative;
}

.service__head-right::before {
  content: "";
  position: absolute;
  left: -38px;
  top: 0px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 38px 38px;
  border-color: transparent transparent #fff transparent;
}

.service__head-left::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  right: -38px;
  top: 1px;
  border-style: solid;
  border-width: 38px 0 0 38px;
  border-color: transparent transparent transparent #fff;
}

@media screen and (min-width: 768px) {
  .service {
    background-image: url("../assets/images/service-bg-md.jpg");
  }
}

@media screen and (min-width: 1200px) {
  .service {
    background-image: url("../assets/images/service-bg.jpg");
  }
}
</style>

