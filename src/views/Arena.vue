<template>
  <div class="home">
    <collapse
      v-for="h in activePanel"
      :key="h.text"
      :selected="false"
    >
      <div slot="collapse-header">
        {{ h.text }}
      </div>
      <div slot="collapse-body">
        <component
          :is="CharatersComponent"
          v-for="(c, index) in h.arr"
          :key="c.cid"
          v-bind="{
            cid: c.id,
            key: index,
            width: 50,
            selected: state.selectedCharas.has(c.id)
          }"
          @clicked="onCharaSelect"
        />
      </div>
    </collapse>
    <div class="battle_search_select">
      <div class="battle_search_select_title">
        Defense:
      </div>
      <div slot="collapse-body">
        <component
          :is="CharatersComponent"
          v-for="index in charSelect"
          :key="index"
          v-bind="{
            cid: index,
            key: index,
            width: 58,
            selected: state.selectedCharas.has(index)
          }"
          @clicked="onDefenseSelect"
        />
        <div
          v-for="index in selectLength"
          :key="index"
          class="battle_search_empty"
        />
      </div>
    </div>
    <div>
      <v-btn
        color="red"
        @click="search"
      >
        click
      </v-btn>
    </div>
    <v-layout row>
      <v-card>
        WIN:
        <component
          :is="CharacterBattleComponent"
          v-for="index in charWin"
          :key="index"
          v-bind="{
            cid: index,
            key: index,
            width: 58,
          }"
        />
        LOSE:
        <component
          :is="CharacterBattleComponent"
          v-for="index in charLose"
          :key="index"
          v-bind="{
            cid: index,
            key: index,
            width: 58,
          }"
        />
      </v-card>
    </v-layout>
  </div>
</template>

<script>
import Collapse from 'vue-collapse'
import UnitsA from '../config/constants/unita.json'
import thai from '../config/constants/thai.json'
import Defense from '../components/Defense.vue'
import apiBattle from '../api/api-battle'

export default {
  name: 'Arena',
  components: {
    Defense,
    Collapse,
  },
  data() {
    return {
      state: {
        selectedCharas: new Set(),
      },
      th: new Set(thai),
      UnitsArr: [],
      backgroundImage: 'url("/static/sprites/charas.png")',
      activePanel: [],
      selectLength: 5,
      charSelect: [],
      charSort: [],
      charWin: [],
      charLose: [],
    }
  },
  computed: {
    CharacterBattleComponent() {
      return 'CharacterBattle'
    },
    CharatersComponent() {
      return 'Charaters'
    },
  },
  async created() {
    this.UnitsArr = UnitsA.sort((a, b) => this.reverseCompare(a, b))
      .filter((e) => !this.th.has(e.id))
    this.activePanel = [
      { text: 'แถวหน้า', arr: this.UnitsArr.filter((e) => e.place === 1) },
      { text: 'แถวกลาง', arr: this.UnitsArr.filter((e) => e.place === 2) },
      { text: 'แถวหลัง', arr: this.UnitsArr.filter((e) => e.place === 3) },
    ]
  },
  methods: {
    async search() {
      const param = `?lteam="${this.charSelect[0]},${this.charSelect[1]},${this.charSelect[2]},${this.charSelect[3]},${this.charSelect[4]}"`
      // console.log(param)
      const getBattle = await apiBattle.getBattleTeam(param)
      // console.log(getBattle.result[0])
      const winTeam = getBattle.result[0].wteam.split(',')
      for (let i = 0; i < winTeam.length; i += 1) {
        this.charWin.push(parseInt(winTeam[i], 10))
      }
      // console.log(this.charWin)
      const loseTeam = getBattle.result[0].lteam.split(',')
      for (let i = 0; i < loseTeam.length; i += 1) {
        this.charLose.push(parseInt(loseTeam[i], 10))
      }
      // console.log(this.charLose)
    },
    findChar(id) {
      const found = this.UnitsArr.find((item) => item.id === id)
      const arrChar = {
        id: found.id,
        position: found.position,
        name: found.name,
      }
      return arrChar
    },
    reverseCompare(a, b) {
      if (a.position < b.position) return -1
      if (a.position > b.position) return 1
      if (a.position === b.position) {
        if (a.position === 185) {
          return a.name === 'クロエ' ? 1 : -1
        }
        if (a.name.length > b.name.length) {
          return 1
        }
        return -1
      }
      return 0
    },
    onCharaSelect(e, s) {
      // console.log(e)
      const { selectedCharas } = this.state
      if (s) {
        selectedCharas.delete(e)
        this.state.selectedCharas = new Set(Array.from(selectedCharas))
      } else {
        if (selectedCharas.size >= 5) {
          return
        }
        selectedCharas.add(e)
        this.state.selectedCharas = new Set(Array.from(selectedCharas))
      }
      const foundChar = this.charSelect.find((item) => item === e)
      if (foundChar === undefined && this.charSelect.length !== 5) {
        this.charSelect.push(e)
        this.selectLength -= 1
      } else if (foundChar === undefined && this.charSelect.length === 5) {
        return
      } else {
        const foundIndexChar = this.charSelect.findIndex((item) => item === e)
        this.charSelect.splice(foundIndexChar, 1)
        this.selectLength += 1
      }
      this.charSort = []
      for (let i = 0; i < this.charSelect.length; i += 1) {
        this.charSort.push(this.findChar(this.charSelect[i]))
      }
      const sortListChar = this.charSort
        .sort((a, b) => this.reverseCompare(a, b))
        .filter((ele) => !this.th.has(ele)).reverse()
      this.charSelect = []
      for (let j = 0; j < sortListChar.length; j += 1) {
        this.charSelect.push(sortListChar[j].id)
      }
      // console.log(this.selectLength)
    },
    onDefenseSelect(e) {
      // console.log(this.selectLength)
      const { selectedCharas } = this.state
      selectedCharas.delete(e)
      this.state.selectedCharas = new Set(Array.from(selectedCharas))
      const foundCharSelect = this.charSelect.findIndex((item) => item === e)
      this.charSelect.splice(foundCharSelect, 1)
      this.selectLength += 1
    },
  },
}
</script>

<style lang="scss">
</style>
