<template>
  <section class="bg-blue-600 h-5/6 w-3/5 ">
    <SideMenu/>
    <ModalDialog :open="modalOpen" @close="modalOpen = false" @value="projectsStore.addProject" placeholder="Nombre del proyecto"
      title="Nuevo proyecto" subtitle="Escribe el nombre de tu proyecto" />
    <button @click="modalOpen = true"
      class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Abrir
      Modal</button>
    <div class="w-full xl:w-4/5 px-4 mx-auto mt-24">
      <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white ">
       <HeaderTable/>

        <div class="block w-full overflow-x-auto">
          <table class="items-center w-full border-collapse text-blueGray-700  ">
            <thead class="thead-light ">
              <tr>
                <th
                  class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Id
                </th>
                <th
                  class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Proyectos
                </th>
                <th
                  class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Tareas
                </th>
                <th
                  class="px-6 bg-blueGray-50 text-blueGray-700 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">
                  Avance
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="( project, index ) in projectsStore.projectWithCompletation" :key="project.id">
                <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  {{  index + 1 }}
                </th>
                <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  {{ project.name }}
                </th>
                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {{ project.taskCount }}
                </td>
                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div class="flex items-center">
                    <span class="mr-2">{{ project.completation }}%</span>
                    <div class="relative w-full">
                      <div class="overflow-hidden h-2 text-xs flex rounded bg-purple-200">
                        <div :style="{ width: project.completation + '%' }"
                          class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500">
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
//COMPONENTES
import ModalDialog from '../components/ModalDialog.vue';
import HeaderTable from '../components/HederTable.vue';
import SideMenu from '../components/SideMenu.vue';

//ICONS
import { useProjectsStore } from '../store/projects.store';


const modalOpen = ref(false)


const projectsStore = useProjectsStore();


</script>