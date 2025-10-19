<template>
  <el-card
    class="product-card"
    :body-style="{ padding: '12px' }"
    data-aos="fade-up"
  >
    <img class="thumb" :src="image" alt="product" />
    <h3 class="title">{{ title }}</h3>
    <p class="desc">{{ short }}</p>
    <div class="actions">
      <el-button type="primary" @click="view">View</el-button>
    </div>
  </el-card>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  props: { id: String, title: String, short: String, image: String },
  setup(props) {
    const router = useRouter();
    const view = () =>
      router.push({ name: "ProductDetails", params: { id: props.id } });
    return { view };
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .thumb {
    width: 100%;
    height: 160px;
    object-fit: cover;
    border-radius: 6px;
    margin-bottom: 0.6rem;
  }
  .title {
    margin: 0.25rem 0;
    font-size: 1.05rem;
  }
  .actions {
    margin-top: auto;
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
