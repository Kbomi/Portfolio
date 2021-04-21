<template>
  <a :href="hrefLink" class="btn btn-link"><span>{{text}} </span>더보기 <i /></a>
</template>

<script>
export default {
  name: 'LinkButton',
  props: {
    hrefLink: String,
    text: String
  }
}
</script>


<style lang='scss' scoped>
  .btn-link {
    display: block;
    max-width: 240px;
    margin: 0 auto 20px;
    padding: 10.5px;
    border: solid 1px #d3d7df;
    border-radius: 28px;
    font-size: 13px;
    color: #5f6773;
    text-align: center;

    @media screen and (min-width: $screen-md-min) {
      max-width: 320px;
      margin-bottom: 0;
      font-size: 14px;
    }

    span {
      font-weight: bold;
    }
    i {
      display: inline-block;
      width: 13px;
      height: 13px;
      @include backgroundImage(
        $image: "/static/images/brandi/ic-btn-more-m@3x.png",
        $size: 100%
      );
      vertical-align: middle;
    }
  }
</style>