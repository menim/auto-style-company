<script>
import BaseContainer from "./BaseContainer";
import BaseHeadline from "./BaseHeadline";
export default {
  name: "SchemaCar",
  components: {
    BaseContainer,
    BaseHeadline
  }
};
</script>
<template>
  <section class="schema-car">
    <BaseContainer>
      <div class="row justify-content-center">
        <BaseHeadline
          class="col-md-8 col-lg-6 col-xl-5"
        >У нас можно заказать комплект полос для оклейки</BaseHeadline>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-7 col-xl-5">
          <img class="schema-car__img" src="../assets/images/car-with-pointers.png" alt />
        </div>
        <ol class="schema-car__list col-md-5 col-xl-4">
          <li class="schema-car__item">
            <strong>Желтая светоотражающая полоса</strong> шириной от 15 до 25 см, идущая по все длине боковых поверхностей кузова ниже 10 см от нижних границ рамок боковых окон.
          </li>
          <li class="schema-car__item">
            <strong>Шашечки</strong> на боковых поверхностях кузова.
          </li>
          <li class="schema-car__item">
            <strong>Полосы темно серого</strong> цвета шириной от 15 до 25 см, расположенные на нижней границе кузова по всей длине боковых поверхностей кузова переднего и заднего бампера.
          </li>
        </ol>
      </div>
    </BaseContainer>
  </section>
</template>
<style scoped>
.schema-car {
  text-align: center;
  padding: 60px 0;
}

.schema-car__img {
  max-width: 100%;
}

.schema-car__list {
  list-style-type: decimal;
  text-align: left;
  counter-reset: item;
}

.schema-car__item {
  color: #000;
  counter-increment: item;
  font-size: 0.8125rem;
  line-height: 1.38;
  list-style-type: none;
  margin: 42px 30px 0 32px;
  padding-left: 18px;
  position: relative;
}

.schema-car__item::before {
  content: counter(item) ".";
  font-size: 1rem;
  font-weight: 900;
  line-height: 1;
  position: absolute;
  top: 0;
  left: -18px;
}

@media screen and (min-width: 768px) {
  .schema-car__item {
    margin: 42px 0 32px;
  }
}
</style>
