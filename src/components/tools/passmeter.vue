<template>
  <span>
    <v-text-field
      v-model="password"
      :type="type"
    ></v-text-field>
    <div class="infostyle">
      <v-progress-linear
        rounded
        :color="pclass"
        :value="pprogress"
        height="15"
      >{{pdata}}</v-progress-linear>

    </div>
  </span>
</template>

<script>
import common from '@/lib/common.js'

export default {
  props: {
    value: { required: false, default: '', type: String },
    pass: { default: false },
    type: { required: false, type: String, default: 'password' }
  },
  data: () => ({
    password: '',
    pmeter: ['Baja', 'Media', 'Alta'],
    pclassarray: ['error', 'warning', 'success'],
    ppercent: ['33', '66', '100']

  }),
  methods: {
  },
  watch: {
    password () {
      this.$emit('input', this.password)
    }
  },
  computed: {
    pstrength () {
      return common.passStrength(this.password)
    },
    pclass () {
      return common.arraymeter(this.pclassarray, this.pstrength, '')
    },
    pdata () {
      return common.arraymeter(this.pmeter, this.pstrength, '')
    },
    pprogress () {
      return common.arraymeter(this.ppercent, this.pstrength, 0)
    }
  },
  created () {
    this.password = this.value;
  }
}
</script>

<style>
.infostyle {
  font-size: 0.75em;
  position: relative;
  top: -15px;
}
</style>