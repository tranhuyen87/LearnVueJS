<template>
  <header>
    <div class="inner">
      <h1 id="logo">
        <img src="../img/logo.png">
      </h1>
      <p>{{ title }}</p><br><br>
      <button v-on:click="changeTllHeader">change title tai compHeader.vue </button>
    </div>
  </header>
</template>
<script>
export default {
  name: "comp-header",
  props : {
    title: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      text: "Header"
    }
  },
  methods: {
    changeTllHeader(e) {
      // không được phép thay đôi trực tiếp props tu component cha
      // Truyền sự kiện thông báo ra bên ngoài
      // kích hoạt sự kiên "ttlevent" trong componentHeader.vue
      // khi kích hoạt fuction bên App.vue nó sẽ chạy
      // khi function no dc chạy - > dữ liệu sẽ dc thay đổi
      var data = {
        title : " test-> data truyen thon qua bien event"
      }
      this.$emit("ttlevent",data);
      //console.log(e);
      //this.title = "Thay doi title tu compHeader"
    }
  }
}
</script>