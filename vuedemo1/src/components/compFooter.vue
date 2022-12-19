<template>
    <footer>
        <div class="inner">
            <p>{{ text }}</p>
            <p>{{ title }}</p>
        </div>
    </footer>
</template>
<script>
export default {
    name: "comp-footer",
    props: {
        title: String
    },
    data() {
        return {
            text: "Footer"
        }
    }
}
</script>
<style>
 footer {
     background: #333;
     padding: 30px 0;
     color: #fff;
 }
</style>