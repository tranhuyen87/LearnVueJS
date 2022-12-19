<template>
    <div class="wrap_player d_flex">
        <div class="player_panel" v-bind:class="{
            active: activePlayer == 0 && !this.isWinner,
            winner: activePlayer == 0 && this.isWinner
            }">
            <div class="player_name">
                <ion-icon name="person-outline"></ion-icon>
                {{getNamePlayer(0)}}
            </div>
            <div class="player_score">
                {{ scorePlayer[0] }}
            </div>
            <div class="player_current">
                <div class="current_txt">Current</div>
                <div class="current_score">{{activePlayer == 0 ? currentScore: 0}}</div>
            </div>
        </div><!-- PLAYER2 -->
         <div class="player_panel" v-bind:class="{
            active: activePlayer == 1 && !this.isWinner,
            winner: activePlayer == 1 && this.isWinner
            }">
            <div class="player_name">
                <ion-icon name="person-outline"></ion-icon>
                {{getNamePlayer(1)}}
            </div>
            <div class="player_score">
                {{ scorePlayer[1] }}
            </div>
            <div class="player_current">
                <div class="current_txt">Current</div>
                <div class="current_score">{{activePlayer == 1 ? currentScore: 0}}</div>
            </div>
        </div><!-- PLAYER2 -->
    </div><!-- wrap_player -->
</template>
<script>
export default {
    name: "player",
    props: {
        scorePlayer: {
            type: Array,
            default: [0,0]
        },
        currentScore: {
            type: Number,
            default: 0
        },
        activePlayer: {
            type: Number,
            default: 0
        },
        isWinner: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {

        }
    },
    methods: {
        getNamePlayer(index) {
            var defaultName = 'Palyer' + (index+1);
            //kiem tra nguoi thang cuoc de doi ten
            if(this.activePlayer == index && this.isWinner) {
                defaultName = "Winner!!!"
            }
            return defaultName
        }
    }
}
</script>