<script>
export default {
  name: "CarDocumentsCard",
  props: ["document"]
};
</script>
<template>
  <div class="documents-card">
    <div class="documents-card__frame"></div>
    <img class="document-card__img" :src="require(`@/assets/images/${document.img}`)" alt />
    <h3 class="documents-card__description">
      {{document.description}}
      <span
        class="documents-card__subdescript"
        v-if="document.subDescription"
      >{{document.subDescription}}</span>
    </h3>
  </div>
</template>
<style>
.documents-card {
  position: relative;
  text-align: center;
  margin-bottom: 60px;
}

.documents-card__frame {
  border: 10px solid rgba(22, 80, 254, 0.6);
  border-radius: 15px;
  height: 181px;
  width: 181px;
  position: absolute;
  left: 50%;
  margin-left: -90px;
}

.document-card__img {
  max-width: 100%;
  position: relative;
  z-index: 1;
}

.documents-card__description {
  color: #263651;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.625;
}

.documents-card__subdescript {
  display: block;
}

@media screen and (min-width: 768px) {
  .document-card__img {
    margin: 25px 0;
  }
}

@media screen and (min-width: 992px) {
  .document-card__img {
    margin: 0;
  }
}
</style>
