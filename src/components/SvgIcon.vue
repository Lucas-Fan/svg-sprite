<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="`#fe-icon-${iconClass}`"></use>
  </svg>
</template>

<script>
export default {
  name: 'icon-svg',
  props: {
    iconClass: {
      type: String,
      required: true
    }
  },
  computed: {

  }
}
</script>

<style>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  overflow: hidden;
}
/* path { fill: inherit !important } */
</style>
