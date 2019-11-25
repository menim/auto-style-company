<script>
import BaseContainer from "./BaseContainer";
import BaseHeadline from "./BaseHeadline";
import BaseButton from "./BaseButton";
import CarDocumentsCard from "./CarDocumentsCard";

export default {
  name: "CarDocuments",
  components: {
    BaseContainer,
    BaseHeadline,
    BaseButton,
    CarDocumentsCard
  },
  data: function() {
    return {
      documents: [
        {
          img: "document.png",
          description: "Уведомление о постановке на учет в налоговом органе"
        },
        {
          img: "sts.png",
          description: "КОПИЯ СТС",
          subDescription: "(первый разворот с фото)"
        },
        {
          img: "passport.png",
          description: "КОПИЯ ПАСПОРТА",
          subDescription: "(первый разворот с фото)"
        }
      ]
    };
  }
};
</script>
<template>
  <section class="car-documents">
    <BaseContainer>
      <div class="row justify-content-center">
        <BaseHeadline
          class="car-documents__section-headline col-md-8 col-lg-6 col-xl-5"
        >Необходимые документы для лицензии</BaseHeadline>
      </div>
      <ul class="car-documents__list row justify-content-center">
        <li
          v-for="(document, index) in documents"
          :key="index"
          class="car-documents__item col-md-4"
        >
          <CarDocumentsCard :document="document" />
        </li>
      </ul>
      <BaseButton>Оформить лицензию</BaseButton>
    </BaseContainer>
  </section>
</template>
<style scoped>
.car-documents {
  background-image: url("../assets/images/service-bg-sm.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  padding: 60px 0;
}

.car-documents__section-headline {
  margin-bottom: 62px;
}

@media screen and (min-width: 768px) {
  .car-documents {
    background-image: url("../assets/images/service-bg-md.jpg");
  }
}

@media screen and (min-width: 1200px) {
  .car-documents {
    background-image: url("../assets/images/service-bg.jpg");
  }
}
</style>
