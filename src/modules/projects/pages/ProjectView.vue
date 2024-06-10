<template>
    <div class="grid-rows-1">
        <section>
            <BreadCrumbs :name="project?.name ?? 'no name'" />
        </section>
        <section>
            <table class="items-center w-full border-collapse text-gray-700 mt-3 ">
                <thead class="bg-blue-600">
                    <tr>
                        <th>
                            Completada
                        </th>
                        <th>
                            Tarea
                        </th>
                        <th>
                            Completada en:
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="task in project?.tasks" :key="task.id">
                        <td>
                            <div class="inline-flex items-center">
                                <label class="relative flex cursor-pointer items-center rounded-full p-3"
                                    for="checkbox-6" data-ripple-dark="true">
                                    <input type="checkbox"
                                        class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-indigo-500 checked:bg-indigo-500 checked:before:bg-indigo-500 hover:before:opacity-10"
                                        :checked="!!task.completedAt" 
                                        @change="() => projectStore.toggleTaskProject(project?.id ?? '', task.id)"
                                        />
                                    <div
                                        class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20"
                                            fill="currentColor" stroke="currentColor" stroke-width="1">
                                            <path fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                </label>
                            </div>
                        </td>
                        <td>
                            {{ task.name }}
                        </td>
                        <td>
                            {{ task.completedAt ?? 'No completado' }}
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <input v-model="newTask" @keyup.enter="addTask" type="text"
                                class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 hover:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Nueva Tarea">
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>


</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import BreadCrumbs from '../components/BreadCrumbs.vue';
import { useProjectsStore } from '../store/projects.store';
import type { Project } from '../interfaces/projects.interface';
interface Props {
    id: string;
}

const router = useRouter();
const props = defineProps<Props>();
const projectStore = useProjectsStore();
const project = ref<Project | null>()
const newTask = ref<string>('');
watch(() => props.id, () => {
    project.value = projectStore.projectList.find((project) => project.id === props.id);
    if (!project.value) {
        //push crea balck
        //replace no deja dar back
        router.replace('/proyects');
    }
}, {
    immediate: true
})

const addTask = () => {
    if (!project.value) return;
    projectStore.addTaskProject(project.value.id, newTask.value);
    newTask.value = '';
}

</script>

<style scoped>
th {
    @apply px-6 bg-blue-50 text-blue-500 align-middle border border-solid border-blue-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left
}

td {
    @apply border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap  text-left
}
</style>