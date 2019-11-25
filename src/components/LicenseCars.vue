<script>
import BaseContainer from './BaseContainer';
import BaseHeadline from './BaseHeadline';
import BaseCard from './BaseCard';
import BaseSublist from './BaseSublist';
import BaseInviteInfo from './BaseInviteInfo';

export default {
  name: 'LicenseCars',
  components: {
    BaseContainer,
    BaseHeadline,
    BaseCard,
    BaseSublist,
    BaseInviteInfo,
  },
  data: function() {
    return {
      carsList: [
        {
          title: 'Автомобиль белый/желто-серый',
          img: 'car-stripes.png',
          newPrice: '2 000',
          period: '5 раб дней',
          agreeMessages: [
            'Лицензия такси на белый цвет СТРОГО с оформлением ИП',
            'Оформление ИП + Счет в банке от 0 ₽ вместо 8 500 ₽',
          ],
        },
        {
          title: 'Автомобиль желтого цвета',
          img: 'car-yellow.png',
          newPrice: '2 000',
          period: '5 раб дней',
          agreeMessages: [
            'Лицензия такси на жёлтый цвет СТРОГО с оформлением ИП',
            'Оформление ИП + Счет в банке от 0 ₽ вместо 8 500 ₽',
          ],
        },
      ],
    };
  },
};
</script>
<template>
  <section id="license-cars" class="license-cars">
    <BaseContainer>
      <BaseHeadline>Оформление лицензии</BaseHeadline>
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <ul class="license-cars__list row">
            <li
              class="col-lg-6 license-cars__item"
              v-for="(car, index) in carsList"
              :key="index"
            >
              <BaseCard :carItem="car" buttonTitle="Оформление лицензии" />
            </li>
          </ul>
        </div>
        <div class="license-cars__doc col-8 col-md-8 col-lg-4">
          <h3 class="license-cars__doc-title">Документы требуемые для ИП</h3>
          <BaseSublist
            class="license-cars__doc-list"
            :sublist="[
              {content: 'копия паспорта'},
              {content: 'копия пенсионного страхового свидетельства (СНИЛС)'},
              {content: 'копия свидетельства о присвоении ИНН (при наличии)'},
            ]"
          />
          <BaseInviteInfo />
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
<style scoped>
.license-cars {
  background-image: url('../assets/images/license-bg-sm.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  padding: 52px 0;
}

.license-cars__doc {
  color: rgba(0, 0, 0, 0.86);
  margin-top: 25px;
  margin-bottom: 85px;
}

.license-cars__doc-title {
  color: #040819;
  font-weight: 700;
  font-size: 1.0625rem;
  line-height: 1.4;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 45px;
}

.license-cars__doc-list {
  padding-left: 28px;
  margin-bottom: 83px;
}

.license-cars__item {
  display: flex;
}

@media screen and (min-width: 768px) {
  .license-cars {
    background-image: url('../assets/images/license-bg-md.jpg');
  }
}

@media screen and (min-width: 1200px) {
  .license-cars {
    background-image: url('../assets/images/license-bg.jpg');
  }
}
</style>
