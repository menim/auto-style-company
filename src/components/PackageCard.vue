<script>
import BaseButton from "./BaseButton";
import BaseSublist from "./BaseSublist";
export default {
  name: "PackageCard",
  components: {
    BaseButton,
    BaseSublist
  },
  props: ["packageItem"]
};
</script>
<template>
  <div class="package-card">
    <div class="package-card__top">
      <h3 class="package-card__title">{{packageItem.title}}</h3>
      <BaseSublist :sublist="packageItem.packageContent" class="package-card__sublist" />
    </div>
    <div class="package-card__bottom">
      <div class="package-card__row">
        <span class="package-card__price-title">Стоимость:</span>
        <span class="package-card__price-value">{{packageItem.price}} ₽</span>
      </div>
      <div class="package-card__row">
        <span class="package-card__period-title">Срок:</span>
        <span class="package-card__period-value">{{packageItem.period}}</span>
      </div>
      <BaseButton class="package-card__button">Заказать</BaseButton>
    </div>
  </div>
</template>
<style>
.package-card {
  background: #f0f0f0;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.18);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 4px;
  padding: 30px 32px 20px 32px;
  margin: 0 auto;
  max-width: 340px;
  min-height: 576px;
  height: 100%;
}

.package-card__title {
  color: #040819;
  font-weight: 700;
  font-size: 1.0625rem;
  line-height: 1.4;
  text-transform: uppercase;
  margin-bottom: 15px;
}

.package-card__bottom {
  border-top: 1px solid #1650fe;
  padding-top: 13px;
}

.package-card__row {
  color: rgba(38, 54, 81, 0.64);
  display: flex;
  justify-content: space-between;
  margin-bottom: 13px;
}

.package-card__price-value {
  color: #1650fe;
  font-size: 1.125rem;
  font-weight: 900;
}

.package-card__button {
  margin-top: 5px;
}

.package-card__sublist li {
  margin-bottom: 15px;
}
</style>
