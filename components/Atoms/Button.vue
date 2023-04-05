<script lang="ts" setup>
const props = defineProps<{
  text: string
}>()
</script>
<template>
    <div>
        <button>
            {{ text }}
        </button>
    </div>
</template>