<template>
    <div class="user">
        <h3>{{ user.name }}</h3>
        <button
         v-on:click="handleDlt"
         class="detele">Deleted</button>
    </div>
</template>
<script>
export default {
    name: "comp-user",
    props: {
        user: {
            type: Object,
            default: null
        }
    },
    data() {
        return {

        }
    },
    methods: {
        handleDlt(e) {
            var data = {
                id: this.user.id
                //id = user.id
            }
            this.$emit('deleteuser', data)
            console.log("su kien click tu use");
        }
    }
}
</script>
<style>
.user {
    position: relative;
}

.user .detele {
    position: absolute;
    top: 0;
    left: 0;
}
</style>