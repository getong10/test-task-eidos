<template>
  <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3723 0.534898C14.7629 0.925422 14.7629 1.55859 14.3723 1.94911L8.37233 7.94911C7.9818 8.33964 7.34864 8.33964 6.95812 7.94911L0.958116 1.94911C0.567591 1.55859 0.567591 0.925421 0.958116 0.534897C1.34864 0.144373 1.9818 0.144373 2.37233 0.534897L7.66522 5.82779L12.9581 0.534898C13.3486 0.144373 13.9818 0.144373 14.3723 0.534898Z" :fill="props.fill"/>
  </svg>
</template>

<script setup lang="ts">
const props = defineProps({
  fill: {
    type: String,
    default: () => {
      return '#999999'
    }
  }
})
</script>