<script>
import successEventBus from "../successEventBus";
export default {
  name: "ModalSuccess",
  data: function() {
    return {
      modalOpen: false
    };
  },
  created() {
    successEventBus.$on("showModal", () => {
      this.modalOpen = true;
    });
  },
  methods: {
    closeModal() {
      this.modalOpen = !this.modalOpen;
    }
  }
};
</script>
<template>
  <div class="modal" :class="{'modal--active': modalOpen, 'modal--hide': !modalOpen}">
    <div class="modal__backdrop" @click.prevent="closeModal"></div>
    <div class="modal__body" :class="{'modal-body--active': modalOpen}">
      <button class="modal__button-close" @click.prevent="closeModal"></button>
      <div class="success-message">
        <h3
          class="success-message__title"
        >Ваши данные успешно отправлены. Мы свяжемся с вами в течении часа.</h3>
        <p class="success-message__paragraph">
          Прглашаем Вас ознакомиться с услугами нашей компании на сайте
          <a
            href="http://auto-style-pro.ru"
          >www.autostyle-pro.ru</a>
        </p>
        <strong>Спасибо</strong>
      </div>
    </div>
  </div>
</template>
<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  z-index: -1;
  transition: opacity 300ms ease-out 150ms;
}

.modal--active {
  opacity: 1;
  visibility: visible;
  z-index: 10;
}

.modal__backdrop {
  background: rgba(4, 8, 25, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.modal__body {
  background-color: transparent;
  position: relative;
  transform: translateY(-200%);
  transition: transform 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55) 150ms;
}

.modal-body--active {
  transform: translateY(0);
}

.modal__button-close {
  background-color: transparent;
  border: 0;
  width: 18px;
  height: 18px;
  padding: 0;
  position: absolute;
  right: 0;
  margin-top: -25px;
}

.modal__button-close::before {
  content: "";
  background-color: #cecfd2;
  position: absolute;
  left: 0;
  width: 18px;
  height: 1px;
  transform: rotate(45deg);
}
.modal__button-close::after {
  content: "";
  background-color: #cecfd2;
  position: absolute;
  left: 0;

  width: 18px;
  height: 1px;
  transform: rotate(-45deg);
}

.success-message {
  color: #263651;
  background-color: #fff;
  border-radius: 4px;
  font-size: 1.25rem;
  line-height: 1.45;
  text-align: center;
  max-width: 340px;
  margin: 0 auto;
  padding: 25px 30px;
}

.success-message__title {
  margin-bottom: 25px;
}

.success-message__paragraph {
  font-size: 1rem;
  margin-bottom: 25px;
}
</style>
