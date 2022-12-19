<template>
    <div class="popup" v-bind:class="getClassPopup">
        <div>
            <h2>Luật Chơi</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae corrupti unde quod enim beatae laborum magni voluptate neque harum, totam, facilis mollitia quos eos dolorum magnam. Ratione quas ipsum rem.</p>
            <button
                v-on:click="conformFun"
            >Đã hiểu</button>
        </div>
    </div>
</template>
<script>
export default {
    name: "popupRule",
    props: {
        isOpenPoup: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return{

        }
    },
    methods: {
        conformFun () {
            console.log("conform popup");
            this.$emit("handalConform");
        }
    },
    computed: {
        getClassPopup: function() {
            return {
                "open" : this.isOpenPoup
            }
        }
    }
}
</script>