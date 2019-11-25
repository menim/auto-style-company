<template>
  <div v-show="modalOpen" class="modal">
    <div class="modal__backdrop" @click.prevent="closeModal"></div>
    <div class="modal__body">
      <button class="modal__button-close" @click.prevent="closeModal"></button>
      <BaseForm class="modal__form" />
    </div>
  </div>
</template>

<script>
import BaseForm from './BaseForm';
import EventBus from '../eventBus';

export default {
  name: 'Modal',
  components: {
    BaseForm,
  },
  data: function() {
    return {
      modalOpen: false,
    };
  },
  created() {
    EventBus.$on('showModal', () => {
      this.modalOpen = true;
    });
  },
  methods: {
    closeModal() {
      this.modalOpen = false;
    },
  },
};
</script>

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
  content: '';
  background-color: #cecfd2;
  position: absolute;
  left: 0;
  width: 18px;
  height: 1px;
  transform: rotate(45deg);
}
.modal__button-close::after {
  content: '';
  background-color: #cecfd2;
  position: absolute;
  left: 0;

  width: 18px;
  height: 1px;
  transform: rotate(-45deg);
}

.modal__form {
  padding: 15px;
}

@media screen and (min-width: 480px) {
  .modal__form {
    padding: 25px 30px;
  }
}
</style>
