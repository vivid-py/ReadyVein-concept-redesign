<script setup>
import EnHeader from './templates/EnHeader.vue';
</script>

<template>
<EnHeader/>
<section id="about" class="container md:m-20 m-10">
    <div class="flex flex-col gap-6">
        <p class="text-5xl md:text-7xl font-semibold text-[#272727] animate-opacity-fade transition-opacity animate-opacity-fade-standart">
            A device 
            <span class="text-[#1565c0]">
                for vein <br> detection
            </span>,<br> that became <br> reality. <br>
            <span class="font-['Manrope'] text-xl md:text-2xl md:max-w-max max-w-52 text-gray-500 font-thin line-clamp-5 animate-opacity-fade-slower">
               ReadyVein — a revolution in medical procedures. <br>Your assistant for quick, safe, and precise vein access.
            </span>
        </p>
        <a href="mailto:alexandra@readyvein.com" class="animate-opacity-fade-slow">
            <div class="flex justify-center p-4 bg-[#3791f9] w-75 active:scale-95 transition-all duration-300 hover:scale-105 hover:border hover:bg-[#fdfcdc] rounded-2xl text-4xl font-semibold animate-bounce-subtle ">
                Request Demo
            </div>
        </a>
        <div class="flex flex-row justify-center bg-[#3791f9]/10 border-[#3791f9] md:w-110 md:text-sm text-sm w-80 border p-1 rounded-full animate-opacity-fade-slower">
            <div class="bg-[#3791f9] rounded-full h-2 w-2 flex justify-center items-center animate-ping"></div>
            Available only for certified healthcare facilities.
        </div>
    </div>
</section>
</template>