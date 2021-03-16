<template>
  <div>
    <h2>숫자야구</h2>
    <div>결과: {{ result }}</div>
    <form v-on:submit="onSubmitForm">
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
      <li v-for="t in tries">
        <span>{{ t.try }}</span>
        <span>{{ t.result }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tries: [],
      value: "",
      result: "",
    };
  },
  methods: {
    onSubmitForm(e) {
      e.preventDefault();
      this.tries.push({
        try: this.value,
        result: "홈런",
      });
      this.value = "";
      this.$refs.answer.focus();
    },
  },
};
</script>

<style></style>
