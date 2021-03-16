<template>
  <div
    :style="style"
    @click="onCharaSelect"
  />
</template>

<script>
import charaMap from '../config/constants/charas.json'

export default {
  name: 'Charaters',
  props: {
    color: {
      type: String,
      default: 'black',
    },
    width: {
      type: Number,
      default: 60,
    },
    cid: {
      type: Number,
      default: 100101,
    },
    grey: {
      type: Boolean,
      default: false,
    },
    show6x: {
      type: Boolean,
      default: false,
    },
    borderRadius: {
      type: Number,
      default: 6,
    },
    selected: {
      type: Boolean,
      default: false,
    },
    noBorder: {
      type: Boolean,
      default: false,
    },
    borderWidth: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    style() {
      const charaid = this.cid
      const mapValue = charaMap[charaid]
      const ratio = this.width / 60
      const backX = mapValue.x * ratio
      const backY = mapValue.y * ratio
      const size = (this.show6x ? 184 : 680) * ratio
      return {
        width: `${this.width}px`,
        height: `${this.width}px`,
        backgroundImage: 'url("/img/charas.png")',
        backgroundSize: `${size}px auto`,
        borderRadius: `${this.borderRadius}px`,
        backgroundPositionX: `-${backX}px`,
        backgroundPositionY: `-${backY}px`,
        opacity: this.selected ? 1 : 0.6,
        cursor: this.noBorder ? 'inherit' : 'pointer',
        border: this.selected && !this.noBorder ? `solid ${this.borderWidth}px #ffa500` : `solid ${this.borderWidth}px`,
        display: 'inline-block',
        margin: '2px 2px',
        filter: this.grey ? 'grayscale(1)' : 'unset',
      }
    },
  },
  methods: {
    onCharaSelect() {
      this.$emit('clicked', this.cid, this.selected)
    },
  },
}
</script>
