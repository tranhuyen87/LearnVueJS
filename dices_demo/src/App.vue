<template>
  <div id="app">
    <div class="main_game">
      <!-- <h1>Dices Game</h1>  -->
      <div class="contents">        
        <player
          v-bind:isWinner="isWinner"
          v-bind:activePlayer="activePlayer"
          v-bind:scorePlayer="scorePlayer"
          v-bind:currentScore="currentScore"
        />
        <controls
          v-bind:isPlaying="isPlaying"
          v-bind:finalSore="finalSore"
          v-on:changeFinalScore="changeFinalScore"
          v-on:handalNewgame="handalNewgame"
          v-on:handalRolldice="handalRolldice"
          v-on:handalHoldScore="handalHoldScore"
         />
        <dices
          v-bind:dices="dices"
         />
        <popup-rule
          v-on:handalConform="handalConform"
          v-bind:isOpenPoup="isOpenPoup"
         />
      </div>
    </div>
    <!-- main -->
  </div>
  <!-- app -->
</template>

<script>
import player from './components/player';
import controls from './components/controls';
import dices from './components/dices';
import popupRule from './components/popupRule';
export default {
  name: 'app',
  data () {
    return {
      isPlaying: false,
      isOpenPoup: false,
      activePlayer: 0,
      scorePlayer: [0,0],
      dices: [1,1],
      currentScore: 0,
      finalSore: 100,
    }
  },
  components: {
    player,
    controls,
    dices,
    popupRule
  },
  computed: {
    isWinner() {
      let {scorePlayer , finalSore} = this
      if(scorePlayer[0] >= finalSore || scorePlayer[1]>= finalSore) {
        let activePlayer = this.activePlayer + 1;
        setTimeout(function(){
            alert('CHÚC MƯNG Player '+ activePlayer + ' BẠN LÀ NGƯỜI ĐÃ THẮNG CUỘC !!!')
        },10)
        this.isPlaying = false;
        return true;
        
      }
      return false;
    }
  },
  methods: {
    changeFinalScore(e) {
      var number = parseInt(e.target.value);
      if(isNaN(number)) {
        this.finalSore = "";
      }else {
        this.finalSore = number;
      }
      //console.log(e.target)
    },
    handalHoldScore() {
      if(this.isPlaying) {
        //console.log(this)
        //console.log("run");
        // activePlayer = 0 -> nguoi choi 1
        // activePlayer = 1 - > nguoi choi 2
        // scorePlayer -> array
        // scorePlayer[0] = scorePlayer[activePlayer]
        // scorePlayer[1] = scorePlayer[activePlayer]
        let { scorePlayer, activePlayer , currentScore } = this;
        let scoreOld = scorePlayer[activePlayer];
        // copy array
        let cloneScorePlayer = [...scorePlayer];
            cloneScorePlayer[activePlayer] = scoreOld + currentScore;

        //this.scorePlayer = cloneScorePlayer;
        this.$set(this.scorePlayer , activePlayer , scoreOld + currentScore);
        if(!this.isWinner) {
          this.nextPlayer();
        }
        //this.scorePlayer[this.activePlayer] = this.scorePlayer[this.activePlayer] + this.currentScore;
        //this.scorePlayer[activePlayer] = scoreOld + currentScore;
      } else {
        alert("Hay nhan vao Newgame")
      }
    },
    nextPlayer() {
      // activePlayer =0 > 1 === 1-> 0
      this.activePlayer = this.activePlayer === 0 ? 1 : 0;
      this.currentScore = 0;
    },
    handalRolldice() {
      if(this.isPlaying) {
        // xoay xuc xac
        // Math.radom(): 0-> 1
        /** 
         0<= X <=1
         0 <= Y = X * 6 <=6
         Math.floor(Math.radom()) - > lam tron xuong
         */
        var dice1 = Math.floor(Math.random()*6) + 1;
        var dice2 = Math.floor(Math.random()*6) + 1;
        this.dices = [dice1,dice2];
        //console.log(dice1,dice2);
        if(dice1 === 1 || dice2 === 1) {
          let activePlayer = this.activePlayer + 1;
         // console.log(activePlayer + 1)
          setTimeout(function(){
            alert('Nguoi choi Player'+ activePlayer + ' da quay trung so 1. Rat tiec!!!')
          },10)
          //css6
          // setTimeout(() => {
          //   alert('Nguoi choi Player'+ activePlayer + ' da quay trung so 1. Rat tiec!!!')
          // },10)
          this.nextPlayer();
        }else {
          // cộng dồn diểm vào cho người choi
          this.currentScore = this.currentScore + dice1 + dice2
        }
      } else {
        alert("Hay nhan vao Newgame");
      }
    },
    handalConform() {
      this.isPlaying = true;
      this.isOpenPoup = false;
      this.activePlayer = 0;
      this.scorePlayer = [0,0];
      this.dices = [1,1];
      this.currentScore = 0;
      
      //console.log("handalConform app");
    },
    handalNewgame() {
      //console.log("handalnewgame app");
      this.isOpenPoup = true;
      // hien thi popup o day
    }
  }
}
</script>
