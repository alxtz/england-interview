<template>
  <div class="container">
    <button
      class="playButton"
      type="button"
      name="button"
      @click="playing = !playing"
    >
      {{playButtonText}}
    </button>
    <div class="slotWrapper">
      <div class="slotItem">
        <div class="slotBlackBorder">
          <div class="ghostBlack">
          </div>
          <div class="payload">
            <div class="tape" :class="{'animate': playing}">
              <div
                v-for="tapeItem in slotListFirst"
                class="gridItem"
                :style="{
                  'background-image': `url(${tapeItem.gameGridImage})`
                }"
              >
                <div class="hoverPlate">
                  <h2 class="gameName">{{tapeItem.gameName}}</h2>
                  <a
                    target="_blank"
                    class="moreButton"
                    v-bind:href="tapeItem.gamePageURL"
                  >
                    MORE INFO
                  </a>
                  <button
                    class="sendButton"
                    type="button"
                    name="button"
                  >
                    SEND TO MOBILE
                  </button>
                </div>
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
            <div class="tape" :class="{'animate': playing}">
              <div
                v-for="tapeItem in slotListSecond"
                class="gridItem"
                :style="{
                  'background-image': `url(${tapeItem.gameGridImage})`
                }"
              >
                <div class="hoverPlate">
                  <h2 class="gameName">{{tapeItem.gameName}}</h2>
                  <button
                    class="moreButton"
                    type="button"
                    name="button"
                  >
                    MORE INFO
                  </button>
                  <button
                    class="sendButton"
                    type="button"
                    name="button"
                  >
                    SEND TO MOBILE
                  </button>
                </div>
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
            <div class="tape" :class="{'animate': playing}">
              <div
                v-for="tapeItem in slotListThird"
                class="gridItem"
                :style="{
                  'background-image': `url(${tapeItem.gameGridImage})`
                }"
              >
                <div class="hoverPlate">
                  <h2 class="gameName">{{tapeItem.gameName}}</h2>
                  <button
                    class="moreButton"
                    type="button"
                    name="button"
                  >
                    MORE INFO
                  </button>
                  <button
                    class="sendButton"
                    type="button"
                    name="button"
                  >
                    SEND TO MOBILE
                  </button>
                </div>
              </div>
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
        playing: false,
        slotListFirst: [],
        slotListSecond: [],
        slotListThird: []
      }
    },
    computed: {
      playButtonText () {
        return this.playing ? 'Stop' : 'Play'
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
          apiList => {
            this.slotListFirst = this.generateRand14(apiList)
            this.slotListSecond = this.generateRand14(apiList)
            this.slotListThird = this.generateRand14(apiList)
          },
          error => {
            console.log(error)
          }
        )
    },
    methods: {
      generateRand14 (apiList) {
        let bufferList = []
        for (let i = 0; i < 7; i++) {
          let randomIndex = _.random(apiList.length - 1)
          bufferList.push(apiList[randomIndex])
          apiList.splice(randomIndex, 1)
        }
        return bufferList.concat(bufferList)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "./index.scss";
  @import "./animation.scss";
</style>
