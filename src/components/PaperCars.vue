<script>
import BaseContainer from './BaseContainer';
import BaseHeadline from './BaseHeadline';
import BaseCard from './BaseCard';
import BaseInfo from './BaseInfo';
import BaseButtonTelephone from './BaseButtonTelephone';

export default {
  name: 'PaperCars',
  components: {
    BaseContainer,
    BaseHeadline,
    BaseCard,
    BaseInfo,
    BaseButtonTelephone,
  },
  data: function() {
    return {
      carsList: [
        {
          title: 'Оклеить автомобиль в БЕЛЫЙ цвет',
          img: 'car-white.png',
          oldPrice: '12 500',
          newPrice: '11 500',
        },
        {
          title: 'Оклеить автомобиль в ЖЁЛТЫЙ цвет',
          img: 'car-yellow.png',
          oldPrice: '14 500',
          newPrice: '12 000',
        },
        {
          title: 'Оклеить автомобиль по ГОСТ МО',
          img: 'car-stripes.png',
          oldPrice: '4 500',
          newPrice: '3 500',
        },
      ],
    };
  },
};
</script>
<template>
  <section id="paper-cars" class="paper-cars">
    <BaseContainer class="paper-cars__container">
      <BaseHeadline class="paper-cars__section-headline"
        >Оклейка авто:</BaseHeadline
      >
      <ul class="paper-cars__list row justify-content-center">
        <li v-for="car in carsList" :key="car.title" class="col-md-8 col-lg-4">
          <BaseCard :carItem="car" buttonTitle="Заказать" />
        </li>
      </ul>
      <div class="row justify-content-center">
        <BaseInfo class="paper-cars__info col-lg-8 col-xl-7"
          >Мы делаем как полный комплекс услуг по оформлению и оклейке авто, так
          и Вы можете заказать отдельные услуги и документы</BaseInfo
        >
      </div>
      <BaseButtonTelephone />
    </BaseContainer>
  </section>
</template>
<style scoped>
.paper-cars {
  background-image: url('../assets/images/cars-bg-sm.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  position: relative;
  padding: 50px 0;
}

.paper-cars::before {
  content: '';
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

.paper-cars__container {
  position: relative;
}

.paper-cars__section-headline {
  color: #fff;
}

.paper-cars__list {
  margin-bottom: 60px;
}

.paper-cars__info {
  margin-bottom: 30px;
}

@media screen and (min-width: 768px) {
  .paper-cars {
    background-image: url('../assets/images/cars-bg-md.jpg');
  }
}

@media screen and (min-width: 1200px) {
  .paper-cars {
    background-image: url('../assets/images/cars-bg.jpg');
  }
}
</style>
