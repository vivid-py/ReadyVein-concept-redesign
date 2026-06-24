<script setup>
import {ref} from 'vue'
</script>

<template>
<header class="flex flex-row items-center p-7 justify-between gap-15 md:px-30">
    <div class="flex flex-col">
        <img src="../assets/logo-full.svg" height="30px" alt="">
        <p class="text-[10px] tracking-[2px]"> See deeper. Act smarter.</p>
    </div>
    <div class="md:flex hidden flex-row items-center gap-2">
        <a href="/ua/#about" class="px-4 py-2 text-[#797979] font-light hover:font-medium hover:text-[#46494C] transition-all duration-200">Ми</a>
        <a href="/ua/#benefits" class="px-4 py-2 text-[#797979] font-light hover:font-medium hover:text-[#46494C] transition-all duration-200">Користь</a>
        <a href="/ua/#contacts" class="px-4 py-2 text-[#797979] font-light hover:font-medium hover:text-[#46494C] transition-all duration-200">Контакти</a>
        <div class="w-px h-5 bg-[#C5C3C6] mx-2"></div>
        <div class="">
            <p class="font-semibold">
                <span><a href="/en" class="text-[#797979] hover:text-[#46494C] hover:scale-120 transition-transform">En</a></span> / Ua
            </p>
        </div>
        
    </div>
</header>
</template>