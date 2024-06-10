<template>
  <div v-if="projectsStore.emptyProjects"
    class="sidebar fixed top-20 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
    <div class="text-gray-100 text-xl">
      <div class="p-2.5 mt-1 flex items-center">
        <AcademicCapIcon class="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600 h-10 w-10"></AcademicCapIcon>
        <h1 class="font-bold text-gray-200 text-[15px] ml-3">No hay Projectos</h1>
        <i class="bi bi-x cursor-pointer ml-28 lg:hidden"></i>
      </div>
      <div class="my-2 bg-gray-600 h-[1px]"></div>
    </div>
  </div>
  <div v-else class="sidebar fixed top-20 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
    <div class="text-gray-100 text-xl">
      <div class="p-2.5 mt-1 flex items-center">
        <AcademicCapIcon class="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600 h-10 w-10"></AcademicCapIcon>
        <h1 class="font-bold text-gray-200 text-[15px] ml-3">TailwindCSS</h1>
        <i class="bi bi-x cursor-pointer ml-28 lg:hidden"></i>
      </div>
      <div class="my-2 bg-gray-600 h-[1px]"></div>
    </div>
    <!-- <template> -->
    <div v-for=" project in projectsStore.projectList" :key="project.id">
      <div class="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
        <div class="flex justify-between w-full items-center">
          <span class="text-[15px] ml-4 text-gray-200 font-bold">
            <RouterLink :to="`/project/${project.id}`">{{ project.name }}</RouterLink>
          </span>
        </div>
      </div>
      <div v-if="project.tasks.length > 0" class="text-left text-sm  w-4/5 mx-auto text-gray-200">
        <h1 v-for="task in project.tasks" :key="task.id" class="cursor-pointer  hover:bg-blue-600 ml-5 mt-1">
          <RouterLink :to="`/project/${project.id}`">{{ task.name }}</RouterLink>
        </h1>
      </div>
    </div>
    <!-- </template> -->

    <!--   <div class="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
        <MagnifyingGlassCircleIcon class="bi bi-search text-sm h-10 w-10"></MagnifyingGlassCircleIcon>
        <input type="text" placeholder="Search" class="text-[15px] ml-4 w-full bg-transparent focus:outline-none" />
      </div> -->
    <!--  <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
      <HomeModernIcon class="h-10 w-10 bi bi-house-door-fill"></HomeModernIcon>
      <span class="text-[15px] ml-4 text-gray-200 font-bold">Home</span>
    </div>
    <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
      <BookOpenIcon class="h-10 w-10 bi bi-bookmark-fill"></BookOpenIcon>
      <span class="text-[15px] ml-4 text-gray-200 font-bold">Bookmark</span>
    </div>
    <div class="my-4 bg-gray-600 h-[1px]"></div>
    <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
      @click="toggleDropdown">
      <ChatBubbleLeftEllipsisIcon class="h-10 w-10 bi bi-chat-left-text-fill"></ChatBubbleLeftEllipsisIcon>
      <div class="flex justify-between w-full items-center">
        <span class="text-[15px] ml-4 text-gray-200 font-bold">Chatbox</span>
        <span class="text-sm rotate-180" id="arrow">
          <ChevronUpIcon v-if="!isOpen" class="h-5 w-5 bi bi-chevron-down"></ChevronUpIcon>
          <ChevronDownIcon v-else class="h-5 w-5 bi bi-chevron-down"></ChevronDownIcon>
        </span>
      </div>
    </div>
    <div :class="{ 'hidden': !isOpen, 'text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold': true }"
      id="submenu">
      <h1 class="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
        Social
      </h1>
      <h1 class="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
        Personal
      </h1>
      <h1 class="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
        Friends
      </h1>
    </div>
    <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
      <ArrowLeftEndOnRectangleIcon class="h-10 w-10 bi bi-box-arrow-in-right"></ArrowLeftEndOnRectangleIcon>
      <span class="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
    </div> -->
  </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue'
import {
  AcademicCapIcon,
  // MagnifyingGlassCircleIcon,
  // HomeModernIcon,
  // BookOpenIcon,
  // ChatBubbleLeftEllipsisIcon,
  // ArrowLeftEndOnRectangleIcon,
  // ChevronDownIcon,
  // ChevronUpIcon,
} from '@heroicons/vue/24/outline'
import { useProjectsStore } from '../store/projects.store';
//manejo del sidebar
// const isOpen = ref(false);

// const toggleDropdown = () => {
//   isOpen.value = !isOpen.value;
// };
//end manejo del sidebar
const projectsStore = useProjectsStore();

</script>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}
</style>