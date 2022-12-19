<template>
    <div class="list_user">
        <h2>List User</h2>
        <div class="box">
             <comp-user 
                v-for="user in listUser"
                v-bind:key="user.id"
                v-bind:user="user"
                v-on:deleteuser="deleteuser"
            />
        </div>
    </div>
</template>
<script>
import compUser from './compUser.vue'
export default {
    name: "comp-listuser",
    props: {
        listUser: {
            type: Array,
            default: []
        }
    },
    data() {
        return {

        }
    },
    components: {
        compUser
    },
    methods: {
        deleteuser(data) {
            //this.user=data.id;
            console.log("su kien deleted tu listuser", data)
            this.$emit('deleteUevent', data)
        }
    }
}
</script>
<style>
.box {
    display: flex;
    flex-wrap: wrap;
}

.user {
    border: 1px solid #000;
    padding: 50px 20px;
    margin: 20px;
    width: 20%;
    text-align: center;
}
</style>