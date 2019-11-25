<script>
import BaseInfo from "./BaseInfo";
import BaseButtonTelephone from "./BaseButtonTelephone";
import BaseContainer from "./BaseContainer";

export default {
  components: {
    BaseInfo,
    BaseButtonTelephone,
    BaseContainer
  }
};
</script>
<template>
  <section class="banner-info">
    <BaseContainer>
      <BaseInfo class="banner-info__info">
        Берегите свое время!
        <br />
        <br />Заказывайте у нас лицензию и оклейку машины!
      </BaseInfo>
      <BaseButtonTelephone />
    </BaseContainer>
  </section>
</template>
<style scoped>
.banner-info {
  background-image: url("../assets/images/cars-bg-sm.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  padding: 60px 0;
  position: relative;
}

.banner-info::before {
  content: "";
  background-image: linear-gradient(
    0deg,
    rgba(4, 8, 25, 0.62),
    rgba(4, 8, 25, 0.62)
  );
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.banner-info__info {
  margin-bottom: 45px;
}

@media screen and (min-width: 768px) {
  .banner-info {
    background-image: url("../assets/images/cars-bg-md.jpg");
  }
}

@media screen and (min-width: 1200px) {
  .banner-info {
    background-image: url("../assets/images/cars-bg.jpg");
  }
}
</style>
