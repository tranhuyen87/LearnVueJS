<template>
    <div class="demo-ref">
        <h2>change Avatart</h2>
        <button
        v-on:click="changeavart"
        >change</button>
        <input ref="inputfile" type="file" class="file">
    </div>
</template>
<script>
export default {
    name: "comp-slot",
    data() {
        return {

        }
    },
    methods: {
        changeavart(e) {
            this.$refs.inputfile.click();
            console.log(this);
        }
    }
}
</script>
<style>
.demo-ref {
    padding: 50px 0;
}
.demo-ref button {
    border: 1px solid #bbb;
    background: #fff;
    padding: 10px 30px;
    margin-top: 40px;
    transition: all 0.3s;
}
.demo-ref button:hover {
    background: #bbb;
}
.demo-ref input.file {
    display: none;
}
</style>