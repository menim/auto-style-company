<script>
import BaseContainer from "./BaseContainer";
import BaseHeadline from "./BaseHeadline";

export default {
  name: "Location",
  components: {
    BaseContainer,
    BaseHeadline
  }
};
</script>
<template>
  <section class="location">
    <BaseContainer>
      <BaseHeadline>Мы находимся:</BaseHeadline>
      <address class="location__address">127273, Москва, Сигнальный пр-д, 18</address>
      <div class="location__map">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor:96216e3b21e469b75b58edd3c1cb9f6f8f19dd8253875e7351b3c12adc8d2b35&amp;source=constructor"
          width="100%"
          height="400"
          frameborder="0"
        ></iframe>
      </div>
    </BaseContainer>
  </section>
</template>
<style scoped>
.location {
  padding: 60px 0;
}

.location__address {
  color: #263651;
  font-style: normal;
  font-size: 1rem;
  text-align: center;
  margin-bottom: 33px;
}
</style>
