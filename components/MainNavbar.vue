<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>
<template>
  <nav class="bg-gondola">
    <div class="navbar  h-24 max-w-7xl mx-auto">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">
          <img class="h-full w-auto" src="/img/logo-orbbit-mobile.png" alt="" srcset="" />
        </a>
      </div>
      <div class="flex-none lg:hidden">
        <button class="btn btn-square btn-ghost">
          <Icon class="h-10 w-10 text-mint-green" icon="material-symbols:menu-rounded" />
        </button>
      </div>
      <div class="hidden lg:flex lg:flex-row lg:justify-end flex-1">
        <ul class="menu menu-horizontal px-1 text-white ">
          <li tabindex="0">
            <a class="uppercase">
              OrbitLuts
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul class="p-2 bg-tangaroa shadow-md">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li>
            <a href="#" class="btn bg-mountain-meadow border-mountain-meadow text-gondola rounded-full w-fit px-6">
              entre em contato
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
