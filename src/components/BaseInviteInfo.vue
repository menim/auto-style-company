<template>
  <div class="invite-info">
    <p class="invite-info__title">Звоните или приезжайте в офис:</p>
    <ul class="invite-info__list">
      <li class="invite-info__item invite-info__item--location">127273, Москва, Сигнальный пр-д, 18</li>
      <li class="invite-info__item invite-info__item--telephone">+7 (916) 667 77 73</li>
    </ul>
  </div>
</template>
<style>
.invite-info {
  border-top: 3px solid #1650fe;
  color: #1650fe;
  font-size: 0.875rem;
  font-weight: 700;
  padding-top: 14px;
}

.invite-info__title {
  font-size: 1rem;
  text-align: center;
  margin-bottom: 23px;
}

.invite-info__list {
  padding-left: 28px;
}

.invite-info__item {
  margin-bottom: 10px;
}

.invite-info__item--location {
  background-image: url("../assets/images/invite-tel-icon.svg");
  background-repeat: no-repeat;
  background-size: 15px 15px;
  background-position: top left;
  padding-left: 31px;
}
.invite-info__item--telephone {
  background-image: url("../assets/images/location-icon.svg");
  background-repeat: no-repeat;
  background-size: 12px 16px;
  background-position: top left;
  padding-left: 32px;
}
</style>
