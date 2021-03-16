<template>
  <div>
    <h2>숫자야구</h2>
    <div>결과: {{ result }}</div>
    <form v-on:submit.prevent="onSubmitForm">
      <input
        ref="answer"
        type="number"
        minlength="4"
        maxlength="4"
        v-model="value"
      />
      <button type="submit">입력</button>
    </form>
    <div>시도: {{ tries.length }}</div>
    <ul>
      <li v-for="t in tries" :key="t.try">
        <span>{{ t.try }}</span>
        <span>{{ t.result }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
const getNumbers = () => {
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
};
export default {
  data() {
    return {
      answer: getNumbers(),
      tries: [],
      value: "",
      result: "",
    };
  },
  methods: {
    onSubmitForm(e) {
      if (this.value === this.answer.join()) {
        // 정답이면
        this.tries.push({
          try: this.value,
          result: "홈런",
        });
        this.answer = getNumbers();
        this.result = "홈런";
        this.value = "";
        this.tries = [];
        this.$refs.answer.focus();
      } else {
        if (this.tries.length >= 9) {
          this.result = `10번 넘게 틀려서 실패! 답은 ${this.answer.join(
            ","
          )}였습니다!`;
          window.alert("게임을 다시 시작합니다.");
          (this.answer = getNumbers()),
            (this.tries = []),
            (this.value = ""),
            (this.result = "");
          this.$refs.answer.focus();
          return;
        }
        let strike = 0;
        let ball = 0;
        const answerArray = this.value.split("").map((v) => parseInt(v));
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === this.answer[i]) {
            strike++;
          } else if (this.answer.includes(answerArray[i])) {
            ball++;
          }
        }
        this.tries.push({
          try: this.value,
          result: `${strike} 스트라이크, ${ball} 볼입니다.`,
        });
        this.value = "";
        this.$refs.answer.focus();
      }
    },
  },
};
</script>

<style></style>
