<template>
	<span>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			style="margin: auto; background: rgb(241, 242, 243 ,0); display: block; shape-rendering: auto;"
			:width="width"
			:height="height"
			viewBox="0 0 100 100"
			preserveAspectRatio="xMidYMid"
		>
			<defs>
				<mask id="ldio-faakjm6uyt8-mask">
					<path
						d="M50 13L75 30L75 70L50 87L25 70L25 30L50 13Z"
						fill="#fff"
						stroke="#000"
						stroke-width="0"
					></path>
				</mask>
			</defs>
			<path
				d="M50 13L75 30L75 70L50 87L25 70L25 30L50 13Z"
				fill="#3e6d8d"
				stroke="#b7e2ff"
				stroke-width="0"
			></path>
			<path
				d="M 50 13 L 78.9898 30 L 78.9898 70 L 50 87 L 63.9898 70 L 63.9898 30 Z"
				mask="url(#ldio-faakjm6uyt8-mask)"
				fill="#3e6d8d"
				stroke="#b7e2ff"
				stroke-width="0"
			>
				<animate
					attributeName="d"
					dur="1s"
					repeatCount="indefinite"
					keyTimes="0;1"
					values="M50 13L90 30L90 70L50 87L75 70L75 30Z;M50 13L25 30L25 70L50 87L10 70L10 30Z"
					begin="-0.2s"
				></animate>
				<animate
					attributeName="fill"
					dur="1s"
					repeatCount="indefinite"
					keyTimes="0;0.5;1"
					values="#3e6d8d;#b7e2ff;#3e6d8d"
					begin="-0.2s"
				></animate>
			</path>
			<path
				d="M 50 13 L 65.9898 30 L 65.9898 70 L 50 87 L 50.9898 70 L 50.9898 30 Z"
				mask="url(#ldio-faakjm6uyt8-mask)"
				fill="#3e6d8d"
				stroke="#b7e2ff"
				stroke-width="0"
			>
				<animate
					attributeName="d"
					dur="1s"
					repeatCount="indefinite"
					keyTimes="0;1"
					values="M50 13L90 30L90 70L50 87L75 70L75 30Z;M50 13L25 30L25 70L50 87L10 70L10 30Z"
					begin="-0.4s"
				></animate>
				<animate
					attributeName="fill"
					dur="1s"
					repeatCount="indefinite"
					keyTimes="0;0.5;1"
					values="#3e6d8d;#b7e2ff;#3e6d8d"
					begin="-0.4s"
				></animate>
			</path>
			<path
				d="M 50 13 L 52.9898 30 L 52.9898 70 L 50 87 L 37.9898 70 L 37.9898 30 Z"
				mask="url(#ldio-faakjm6uyt8-mask)"
				fill="#3e6d8d"
				stroke="#b7e2ff"
				stroke-width="0"
			>
				<animate
					attributeName="d"
					dur="1s"
					repeatCount="indefinite"
					keyTimes="0;1"
					values="M50 13L90 30L90 70L50 87L75 70L75 30Z;M50 13L25 30L25 70L50 87L10 70L10 30Z"
					begin="-0.6s"
				></animate>
				<animate
					attributeName="fill"
					dur="1s"
					repeatCount="indefinite"
					keyTimes="0;0.5;1"
					values="#3e6d8d;#b7e2ff;#3e6d8d"
					begin="-0.6s"
				></animate>
			</path>
			<path
				d="M 50 13 L 39.9898 30 L 39.9898 70 L 50 87 L 24.9898 70 L 24.9898 30 Z"
				mask="url(#ldio-faakjm6uyt8-mask)"
				fill="#3e6d8d"
				stroke="#b7e2ff"
				stroke-width="0"
			>
				<animate
					attributeName="d"
					dur="1s"
					repeatCount="indefinite"
					keyTimes="0;1"
					values="M50 13L90 30L90 70L50 87L75 70L75 30Z;M50 13L25 30L25 70L50 87L10 70L10 30Z"
					begin="-0.8s"
				></animate>
				<animate
					attributeName="fill"
					dur="1s"
					repeatCount="indefinite"
					keyTimes="0;0.5;1"
					values="#3e6d8d;#b7e2ff;#3e6d8d"
					begin="-0.8s"
				></animate>
			</path>
			<path
				d="M 50 13 L 26.9898 30 L 26.9898 70 L 50 87 L 11.9898 70 L 11.9898 30 Z"
				mask="url(#ldio-faakjm6uyt8-mask)"
				fill="#3e6d8d"
				stroke="#b7e2ff"
				stroke-width="0"
			>
				<animate
					attributeName="d"
					dur="1s"
					repeatCount="indefinite"
					keyTimes="0;1"
					values="M50 13L90 30L90 70L50 87L75 70L75 30Z;M50 13L25 30L25 70L50 87L10 70L10 30Z"
					begin="-1s"
				></animate>
				<animate
					attributeName="fill"
					dur="1s"
					repeatCount="indefinite"
					keyTimes="0;0.5;1"
					values="#3e6d8d;#b7e2ff;#3e6d8d"
					begin="-1s"
				></animate>
			</path>
			<path
				d="M25 30L75 30"
				fill="#3e6d8d"
				stroke="#b7e2ff"
				stroke-width="0"
			></path>
			<path
				d="M25 70L75 70"
				fill="#3e6d8d"
				stroke="#b7e2ff"
				stroke-width="0"
			></path>
		</svg>
	</span>
</template>

<script>
export default {
	props: {
		width: {
			type: String,
			default: '100'
		},
		height: {
			type: String,
			required: false,
			default: '100'
		}
	}

}
</script>

<style>
</style>