<script>
import BaseButton from "./BaseButton";
import BaseAgreementMessage from "./BaseAgreementMessage";

export default {
  name: "BaseCard",
  components: {
    BaseButton,
    BaseAgreementMessage,
  },
  props: ["carItem"],
  computed: {
    car: function() {
      return this.carItem;
    }
  },
};
</script>
<template>
  <div class="card">
    <h3 class="card__title">{{car.title}}</h3>
    <img class="card__image" :src="require(`@/assets/images/${car.img}`)" alt />
    <div class="card__wrapper">
      <div class="card__price">
        <span v-if="car.oldPrice" class="card__old-price">{{car.oldPrice}} ₽</span>
        <div class="card__new-price">
          <span class="card__price-label">Стоимость:</span>
          <span class="card__price-value">{{car.newPrice}} ₽</span>
        </div>
      </div>
      <div v-if="car.period" class="card__period">
        <span class="card__period-label">Срок выполнения:</span>
        <span class="card__period-value">{{car.period}}</span>
      </div>
      <BaseButton class="card__button">Оформить лицензию</BaseButton>
      <ul v-if="car.agreeMessages" class="card__agreement-list">
        <li class="card__agreement-item" v-for="(message, index) in car.agreeMessages" :key="index">
          <BaseAgreementMessage>{{message}}</BaseAgreementMessage>
        </li>
      </ul>
    </div>
  </div>
</template>
<style>
.card {
  background: #f0f0f0;
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.18);
  border-radius: 4px;
  text-align: center;
  padding: 22px 14px 32px;
  position: relative;
  max-width: 340px;
  margin: 0 auto 13px;
}

.card::before {
  content: "";
  background-image: url("../assets/images/sale.svg");
  background-size: 32px 69px;
  width: 32px;
  height: 69px;
  position: absolute;
  top: -6px;
  right: 26px;
}

.card__title {
  color: #040819;
  font-size: 1.0625rem;
  font-weight: 700;
  line-height: 1.4;
  text-align: center;
  padding: 0 61px;
  margin-bottom: 35px;
}

.card__image {
  margin-bottom: 10px;
  max-width: 100%;
}

.card__wrapper {
  padding: 0 18px;
}

.card__price {
  text-align: right;
}

.card__old-price {
  color: rgba(38, 54, 81, 0.59);
  font-size: 0.75rem;
  line-height: 2.33;
  letter-spacing: 0.1em;
  text-decoration-line: line-through;
}

.card__new-price {
  color: rgba(38, 54, 81, 0.64);
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  line-height: 1.75;
}

.card__price-value {
  color: #1650fe;
  font-size: 1.125rem;
  font-weight: 900;
  line-height: 1.55;
}

.card__period {
  color: rgba(38, 54, 81, 0.64);
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  line-height: 1.75;
}

.card__button {
  margin-top: 20px;
}

.card__agreement-list {
  text-align: left;
  margin-top: 19px;
}

.card__agreement-item:last-child {
  margin-top: 10px;
}

@media screen and (min-width: 768px) {
  .card {
    max-width: none;
  }
}

@media screen and (min-width: 992px) {
  .card__title {
    padding: 0 49px;
  }
}

@media screen and (min-width: 1200px) {
  .card__title {
    padding: 0 61px;
  }
}
</style>
