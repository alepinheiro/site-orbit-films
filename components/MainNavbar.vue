<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>
<template>
  <nav>
    <div class="navbar bg-gondola h-24">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">
          <img
            class="h-full w-auto"
            src="/img/logo-orbbit-mobile.png"
            alt=""
            srcset=""
          />
        </a>
      </div>
      <div class="flex-none">
        <button class="btn btn-square btn-ghost">
          <Icon
            class="h-10 w-10 text-mint-green"
            icon="material-symbols:menu-rounded"
          />
        </button>
      </div>
    </div>
  </nav>
</template>
