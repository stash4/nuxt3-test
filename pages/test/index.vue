<template>
    <main>
        <div class="relative">
            <div class="relative flex justify-start">
                <span class="pr-3 text-lg font-medium text-neutral-600 bg-white"> All Issues </span>
            </div>
        </div>
        <ContentList path="/test">
            <template v-slot="{ list }">
                <!--<div v-for="article in list" :key="article._path">
                    <NuxtLink :to="article._path">
                        <h3>{{ article.title }}</h3>
                        <p>{{ article.description }}{{ article._path }}</p>
                    </NuxtLink>
                </div>-->
                <section class="text-gray-600 body-font overflow-hidden">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="-my-8 divide-y-2 divide-gray-100" v-for="article in list" :key="article._path">
                            <div class="py-8 flex flex-wrap md:flex-nowrap" >
                                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                    <span class="font-semibold title-font text-gray-700">CATEGORY</span>
                                    <span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                                </div>
                                <div class="md:flex-grow">
                                    <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{{ article.title }}</h2>
                                    <p class="leading-relaxed">{{ article.description }}</p>
                                    <NuxtLink class="text-indigo-500 inline-flex items-center mt-4" :to="article._path">Learn More
                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </template>
            <template #not-found>
                <p>No articles found.</p>
        </template>
    </ContentList>
</main></template>