<template>
	<v-navigation-drawer
		v-model="drawer"
		app
		clipped
	>
		<v-app-sidebar-menu></v-app-sidebar-menu>
	</v-navigation-drawer>
</template>

<script>

import sidebarmenu from '@/components/container/sidebar/menu.vue'

export default {
	components: {
		"v-app-sidebar-menu": sidebarmenu
	},
	props: {
		value: {
			required: true,
			default: false
		},
		menu: {
			required: false,
			default: () => ({})
		}
	},
	data: () => ({
		drawer: false
	}),
	watch: {
		drawer () {
			this.$emit('input', this.drawer)
		},
		value (v) {
			this.drawer = v
		}
	},
	created () {
		this.drawer = this.value
	}

}
</script>

<style>
</style>