<template>
    <div class="wrap_controls">
        <div class="control new_btn">
            <button
                v-on:click="newgame"
            ><ion-icon name="game-controller-outline"></ion-icon>NEW GAME</button>
        </div>
        <div class="control roll_btn">
            <button
                v-on:click="rolldice"
            ><ion-icon name="sync-outline"></ion-icon>ROLL DICE</button>
        </div>
        <div class="control hold_btn">
            <button
                v-on:click="$emit('handalHoldScore')"
            ><ion-icon name="archive-outline"></ion-icon>HOLD</button>            
        </div>
        <div class="final_score">
            <input 
                v-bind:disabled="isPlaying"
                v-bind:value="finalSore"
                v-on:input="$emit('changeFinalScore', $event)"
                type="number" placeholder="Final Score"
            >
            <!-- <input 
                v-bind:value="valueDemo"
                v-on:input="valueDemo = $event.target.value"
                type="number" placeholder="Final Score"
            > -->
        </div>
    </div><!-- wrap_player -->
</template>
<script>
export default {
    name: "controls",
    props: {
        finalSore: {
            type: [Number,String],
            default: 100,
        },
        isPlaying: {
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {
            valueDemo: 100
        }
    },
    methods: {
        newgame() {
            //console.log("newgame controls");
            this.$emit("handalNewgame");
        },
        rolldice() {
            this.$emit("handalRolldice");
        }
    }
}
</script>