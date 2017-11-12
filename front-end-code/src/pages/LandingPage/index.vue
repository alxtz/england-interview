<template>
  <div class="container">
    <div class="slotWrapper">
      <div class="slotItem">
        <div class="slotBlackBorder">
          <div class="ghostBlack">
          </div>
          <div class="payload">
            <div class="tape">
              <div
                class="gridItem"
                :style="{
                  'background-image': `url(https://secure.mfortune.co.uk/cdn2/img//images/2822-60-vegas-vegas.png)`
                }"
              >
              </div>
              <div
                class="gridItem"
                :style="{
                  'background-image': `url(https://secure.mfortune.co.uk/cdn2/img//images/4703-60-cat-and-mouse.png)`
                }"
              >
              </div>
              <div
                class="gridItem"
                :style="{
                  'background-image': `url(https://secure.mfortune.co.uk/cdn2/img//images/4782-60-snakes-and-ladders.png)`
                }"
              >
              </div>
              <div
                class="gridItem"
                :style="{
                  'background-image': `url(https://secure.mfortune.co.uk/cdn2/img//images/4689-60-burger-man.png)`
                }"
              >
              </div>
              <div
                class="gridItem"
                :style="{
                  'background-image': `url(https://secure.mfortune.co.uk/cdn2/img//images/4764-60-which-witch.png)`
                }"
              >
              </div>
              <div
                class="gridItem"
                :style="{
                  'background-image': `url(https://secure.mfortune.co.uk/cdn2/img//images/4697-60-buster-safe.png)`
                }"
              >
              </div>
              <div
                class="gridItem"
                :style="{
                  'background-image': `url(https://secure.mfortune.co.uk/cdn2/img//images/2326-60-quest-for-fire.png)`
                }"
              >
              </div>
              <div
                class="gridItem"
                :style="{
                  'background-image': `url(https://secure.mfortune.co.uk/cdn2/img//images/2822-60-vegas-vegas.png)`
                }"
              >
              </div>
              <div
                class="gridItem"
                :style="{
                  'background-image': `url(https://secure.mfortune.co.uk/cdn2/img//images/4703-60-cat-and-mouse.png)`
                }"
              >
              </div>
              <div
                class="gridItem"
                :style="{
                  'background-image': `url(https://secure.mfortune.co.uk/cdn2/img//images/4782-60-snakes-and-ladders.png)`
                }"
              >
              </div>
              <div
                class="gridItem"
                :style="{
                  'background-image': `url(https://secure.mfortune.co.uk/cdn2/img//images/4689-60-burger-man.png)`
                }"
              >
              </div>
              <div
                class="gridItem"
                :style="{
                  'background-image': `url(https://secure.mfortune.co.uk/cdn2/img//images/4764-60-which-witch.png)`
                }"
              >
              </div>
              <div
                class="gridItem"
                :style="{
                  'background-image': `url(https://secure.mfortune.co.uk/cdn2/img//images/4697-60-buster-safe.png)`
                }"
              >
              </div>
              <div
                class="gridItem"
                :style="{
                  'background-image': `url(https://secure.mfortune.co.uk/cdn2/img//images/2326-60-quest-for-fire.png)`
                }"
              >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slotItem">
        <div class="slotBlackBorder">
          <div class="ghostBlack">
          </div>
          <div class="payload">
          </div>
        </div>
      </div>
      <div class="slotItem">
        <div class="slotBlackBorder">
          <div class="ghostBlack">

          </div>
          <div class="payload">
            <div
              class="gridItem"
              :style="{
                'background-image': `url(https://secure.mfortune.co.uk/cdn2/img//images/2822-60-vegas-vegas.png)`
              }"
            >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <ul class="list" v-for="slotItem in slotListFirst">
      <li class="listItem">slotItem</li>
    </ul> -->
  </div>
</template>

<script>
  import _ from 'lodash'
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
          list => {
            console.log(list)
            const shuffledFirst = _.shuffle(list)
            this.slotListFirst = shuffledFirst.concat(shuffledFirst)
            const shuffledSecond = _.shuffle(list)
            this.slotListSecond = shuffledSecond.concat(shuffledSecond)
            const shuffledThird = _.shuffle(list)
            this.slotListThird = shuffledThird.concat(shuffledThird)
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
  @import "./animation.scss";
</style>
