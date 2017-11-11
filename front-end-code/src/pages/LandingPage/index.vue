<template>
  <div class="container">
    <div class="slotWrapper">
      <div class="slotItem">
        <div class="slotBlackBorder">
          <div class="ghostBlack">
          </div>
          <div class="payload">
            <img
              class="gameImg"
              src="https://secure.mfortune.co.uk/cdn2/img//images/2822-60-vegas-vegas.png"
              alt="payload"
            />
            <img
              class="gameImg"
              src="https://secure.mfortune.co.uk/cdn2/img//images/2822-60-vegas-vegas.png"
              alt="payload"
            />
            <img
              class="gameImg"
              src="https://secure.mfortune.co.uk/cdn2/img//images/2822-60-vegas-vegas.png"
              alt="payload"
            />
          </div>
        </div>
      </div>
      <div class="slotItem">
        <div class="slotBlackBorder">
          <div class="ghostBlack">
          </div>
          <div class="payload">
            <img
              class="gameImg"
              src="https://secure.mfortune.co.uk/cdn2/img//images/2822-60-vegas-vegas.png"
              alt="payload"
            />
            <img
              class="gameImg"
              src="https://secure.mfortune.co.uk/cdn2/img//images/2822-60-vegas-vegas.png"
              alt="payload"
            />
            <img
              class="gameImg"
              src="https://secure.mfortune.co.uk/cdn2/img//images/2822-60-vegas-vegas.png"
              alt="payload"
            />
          </div>
        </div>
      </div>
      <div class="slotItem">
        <div class="slotBlackBorder">
          <div class="ghostBlack">

          </div>
          <div class="payload">
            <img
              class="gameImg"
              src="https://secure.mfortune.co.uk/cdn2/img//images/2822-60-vegas-vegas.png"
              alt="payload"
            />
            <img
              class="gameImg"
              src="https://secure.mfortune.co.uk/cdn2/img//images/2822-60-vegas-vegas.png"
              alt="payload"
            />
            <img
              class="gameImg"
              src="https://secure.mfortune.co.uk/cdn2/img//images/2822-60-vegas-vegas.png"
              alt="payload"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="list">

    </div>
  </div>
</template>

<script>
  export default {
    name: 'LandingPage',
    data () {
      return {
        slotListFirst: [],
        slotListSecond: [],
        slotListThird: []
      }
    },
    created () {
      console.log('create this')
      this.$http.get('https://www.mfortune.co.uk/mk/jackpotservice/')
        .then(
          response => {
            console.log(response)
            return response.body
          },
          error => {
            console.log(error)
          }
        )
        .then(
          response => {
            console.log(response)
          },
          error => {
            console.log(error)
          }
        )
    }
  }
</script>

<style scoped lang="scss">
  @import "./index.scss";
</style>
