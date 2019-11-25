<script>
import BaseContainer from './BaseContainer';
import PackageCard from './PackageCard';
export default {
  name: 'PackagesList',
  components: {
    BaseContainer,
    PackageCard,
  },
  data: function() {
    return {
      packagesList: [
        {
          title: 'Пакет базовый:',
          packageContent: [
            {content: 'бесплатная консультация'},
            {content: 'регистрация ИП'},
            {content: 'подбор ОКВЭД'},
            {content: 'подбор оптимальной системы налогообложения'},
            {content: 'открытие расчетного счета'},
          ],
          price: '0',
          period: 'от 5-ти до 10ти дней',
        },
        {
          title: 'Пакет Лицензия + ИП:',
          packageContent: [
            {content: 'бесплатная консультация'},
            {content: 'регистрация ИП'},
            {content: 'подбор ОКВЭД'},
            {content: 'подбор оптимальной системы налогообложения'},
            {content: 'открытие расчетного счета'},
            {content: 'оформление лицензии', highlight: true},
          ],
          price: '2 000',
          period: 'от 5-ти до 10ти дней',
        },
        {
          title: 'Лицензия ИП цвет желтый:',
          packageContent: [
            {content: 'бесплатная консультация'},
            {content: 'регистрация ИП'},
            {content: 'подбор ОКВЭД'},
            {content: 'подбор оптимальной системы налогообложения'},
            {content: 'открытие расчетного счета'},
            {content: 'оформление лицензии'},
            {content: 'оклейка в желтый цвет', highlight: true},
          ],
          price: '14 000',
          period: 'от 5-ти до 10ти дней',
        },
        {
          title: 'Лицензия ИП цвет белый:',
          packageContent: [
            {content: 'бесплатная консультация'},
            {content: 'регистрация ИП'},
            {content: 'подбор ОКВЭД'},
            {content: 'подбор оптимальной системы налогообложения'},
            {content: 'открытие расчетного счета'},
            {content: 'оформление лицензии'},
            {content: 'оклейка в белый цвет', highlight: true},
          ],
          price: '13 000',
          period: 'от 5-ти до 10ти дней',
        },
        {
          title: 'Лицензия ИП цвет бел.+ГОСТ:',
          packageContent: [
            {content: 'бесплатная консультация'},
            {content: 'регистрация ИП'},
            {content: 'подбор ОКВЭД'},
            {content: 'подбор оптимальной системы налогообложения'},
            {content: 'открытие расчетного счета'},
            {content: 'оформление лицензии'},
            {content: 'оклейка в белый цвет + гост', highlight: true},
          ],
          price: '16 000',
          period: 'от 5-ти до 10ти дней',
        },
        {
          title: 'Пакет все включено:',
          packageContent: [
            {content: 'бесплатная консультация'},
            {content: 'регистрация ИП'},
            {content: 'подбор ОКВЭД'},
            {content: 'подбор оптимальной системы налогообложения'},
            {content: 'открытие расчетного счета'},
            {content: 'оформление лицензии'},
            {content: 'оклейка белый/желтый/гост'},
            {content: 'путевые листы', highlight: true},
            {content: 'карточка водителя', highlight: true},
            {content: 'договор предрейсовый', highlight: true},
          ],
          price: '18 500',
          period: 'от 5-ти до 10ти дней',
        },
      ],
    };
  },
};
</script>
<template>
  <section id="packages" class="packages">
    <BaseContainer>
      <ul class="packages__list row">
        <li
          v-for="(packageItem, index) in packagesList"
          :key="index"
          class="packages__item col-md-6 col-lg-4"
        >
          <PackageCard :packageItem="packageItem" />
        </li>
      </ul>
    </BaseContainer>
  </section>
</template>
<style scoped>
.packages {
  padding: 60px 0 40px;
}

.packages__item {
  margin-bottom: 30px;
}
</style>
