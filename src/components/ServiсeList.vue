<script>
import BaseSublist from './BaseSublist';

export default {
  name: 'ServiceList',
  components: {
    BaseSublist,
  },
};
</script>
<template>
  <div class="row justify-content-center">
    <ul class="service__list col-md-6 col-xl-4">
      <li class="service__item service__item--lg">
        <h3 class="service__subtitle">Оклейка авто под такси по ГОСТУ МО</h3>
        <BaseSublist
          :sublist="[
            {content: 'Оклейка в белый цвет'},
            {content: 'Оклейка в желтый цвет'},
            {content: 'Оклейка гост'},
          ]"
        />
        <a v-scroll-to="'#paper-cars'" class="service__button">Подробнее</a>
      </li>
    </ul>
    <ul class="service__list col-md-6 col-xl-4">
      <li class="service__item">
        <h3 class="service__subtitle">Оформление путевых листов</h3>
      </li>
      <li class="service__item">
        <h3 class="service__subtitle">
          Договор планового предрейсового осмотра
        </h3>
      </li>
      <li class="service__item">
        <h3 class="service__subtitle">Оформление карточки водителя</h3>
      </li>
      <li class="service__item service-item--last">
        <h3 class="service__subtitle">Оформление диагностической карты</h3>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.service__item {
  background: #ffffff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);
  border-radius: 2px;
  text-align: center;
  max-width: 340px;
  margin: 0 auto 8px;
  padding: 16px 40px;
}

.service__item--lg {
  padding: 50px 40px;
}

.service__item--last {
  margin-bottom: 0;
}

.service__subtitle {
  color: #040819;
  display: flex;
  align-items: center;
  font-size: 1.0625rem;
  font-weight: 900;
  text-align: left;
  line-height: 1.4;
}

.service__subtitle::before {
  content: '';
  background-image: url('../assets/images/checkbox-selected-icon.svg');
  background-repeat: no-repeat;
  flex: 0 0 auto;
  margin-right: 16px;
  height: 28px;
  width: 32px;
}

.service__button {
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #1650fe;
  border-radius: 2px;
  color: #1650fe;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  text-align: center;
  padding: 0;
  margin: 0 auto;
  height: 32px;
  width: 132px;
}

.service__list .sublist {
  text-align: left;
  margin-bottom: 35px;
  margin-top: 25px;
  padding-left: 46px;
}
</style>
