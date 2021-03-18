<template>
  <div>
    <div>
      <p>당첨 숫자</p>
      <lotto-ball v-for="ball in winBalls" :key="ball" :number="ball"></lotto-ball>
    </div>
    <div>
      <p>보너스!</p>
      <lotto-ball v-if="bonus" :number="bonus"></lotto-ball>
      <button v-if="redo" @click="onClickRedo">한 번 더!</button>
    </div>
  </div>
</template>

<script>
import LottoBall from "./LottoBall";
const getWinNumbers = () => {
  const candidate = Array(45)
    .fill()
    .map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(
      candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
    );
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [...winNumbers, bonusNumber];
};
const timeouts = [];
export default {
  components: {
    "lotto-ball": LottoBall
  },
  data() {
    return {
      winNumbers: getWinNumbers(),
      redo: false,
      winBalls: [],
      bonus: null
    };
  },
  computed: {},
  methods: {
    showBalls() {
      for (let i = 0; i < this.winNumbers.length - 1; i++) {
        timeouts[i] = setTimeout(() => {
          this.winBalls.push(this.winNumbers[i]);
        }, (i + 1) * 1000);
      }
      timeouts[6] = setTimeout(() => {
        this.bonus = this.winNumbers[6];
        this.redo = true;
      }, 7000);
    },
    hideBalls() {
      timeouts.forEach(time => {
        clearTimeout(time);
      });
    },
    onClickRedo() {
      this.winNumbers = getWinNumbers();
      (this.redo = false), (this.winBalls = []);
      this.bonus = null;
      this.showBalls();
    }
  },
  watch: {},
  mounted() {
    this.showBalls();
  },
  destroyed() {
    this.hideBalls();
  }
};
</script>

<style scoped>
</style>
