<template>
    <div class="wrap_dices">
        <div id="dice-1" class="dices">
            <div class="spinner" v-bind:class="'dice-' + dices[0]">
                <div class="face1">1</div>
                <div class="face2">2</div>
                <div class="face3">3</div>
                <div class="face4">4</div>
                <div class="face5">5</div>
                <div class="face6">6</div>
            </div>
        </div><!-- dices -->
        <div id="dice-2" class="dices">
            <div class="spinner" v-bind:class="'dice-' + dices[1]">
                <div class="face1">1</div>
                <div class="face2">2</div>
                <div class="face3">3</div>
                <div class="face4">4</div>
                <div class="face5">5</div>
                <div class="face6">6</div>
            </div>
        </div><!-- dices -->
    </div><!-- wrap_dices -->
</template>
<script>
export default {
    name: "dices",
    props: {
        dices: {
            type:Array,
            default: [0,0]
        }
    },
    data() {
        return {

        }
    }
}
</script>