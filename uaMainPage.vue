<script setup>
import UaHeader from './templates/UaHeader.vue';
</script>

<template>
<UaHeader/>
<section id="about" class="container md:m-20 m-10">
    <div class="flex flex-col gap-6">
        <p class="text-5xl md:text-7xl font-semibold text-[#272727] animate-opacity-fade transition-opacity animate-opacity-fade-standart">
            Пристрій
            <span class="text-[#1565c0]">
                для <br> пошуку вен
            </span>,<br> який став <br> реальністю. <br>
            <span class="font-['Manrope'] text-xl md:text-2xl md:max-w-max max-w-52 text-gray-500 font-thin line-clamp-10 animate-opacity-fade-slower">
               ReadyVein — революція в медичних процедурах. <br>Ваш асистент для швидкого, безпечного та точного доступу до вен.
            </span>
        </p>
        <a href="mailto:alexandra@readyvein.com" class="animate-opacity-fade-slow">
            <div class="p-4 bg-[#3791f9] w-75 active:scale-95 transition-all duration-300 hover:scale-105 hover:border hover:bg-[#fdfcdc] rounded-2xl text-4xl font-semibold animate-bounce-subtle ">
                Замовити демо
            </div>
        </a>
        <div class="flex flex-row justify-center bg-[#3791f9]/10 border-[#3791f9] md:w-110 md:text-sm text-sm w-80 border p-1 rounded-full animate-opacity-fade-slower">
            <div class="bg-[#3791f9] rounded-full h-2 w-2 flex justify-center items-center animate-ping"></div>
            Доступно лише для сертифікованих лікарняних закладів.
        </div>
    </div>
</section>
</template>