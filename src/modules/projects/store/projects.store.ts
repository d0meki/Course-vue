import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Project } from '../interfaces/projects.interface';
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from '@vueuse/core';

/* const inicialLoad = () => {
  return [
    {
      id: uuidv4(),
      name: 'Project 1',
      tasks: [
        {
          id: '1',
          name: 'Task 1',
          completedAt: new Date(),
        },
        {
          id: '2',
          name: 'Task 2',
        },
      ],
    },
    {
      id: uuidv4(),
      name: 'Project 2',
      tasks: [
        {
          id: '1',
          name: 'Task 1',
        },
        {
          id: '2',
          name: 'Task 2',
        },
      ],
    },
  ];
}; */

export const useProjectsStore = defineStore('projects', () => {
  // const projects = ref<Project[]>(inicialLoad())
  // const projects = ref(useLocalStorage<Project[]>('projects', inicialLoad()));
  const projects = ref(useLocalStorage<Project[]>('projects', []));
  const addProject = (project: string) => {
    if (project.length === 0) return;
    projects.value.push({
      id: uuidv4(),
      name: project,
      tasks: [],
    });
  };

  const addTaskProject = (projectId: string, taskName: string) => {
   if( taskName.trim().length === 0) return;
    const project = projects.value.find((p) => p.id === projectId);
    if (!project) return;
    project.tasks.push({
      id: uuidv4(),
      name: taskName,
    });
  };

  const toggleTaskProject = (projectId: string, taskId: string) => {
    const project = projects.value.find((p) => p.id === projectId);
    if (!project) return;
    const task = project.tasks.find((t) => t.id === taskId);
    if (!task) return;
    task.completedAt = task.completedAt ? undefined : new Date();
  };

  return {
    //properties
    // projects,
    //getters o propiedades computadas
    projectList: computed(() => [...projects.value]),
    emptyProjects: computed(() => projects.value.length === 0),

    projectWithCompletation: computed(() => {
      return projects.value.map((project) => {
        const completed = project.tasks.filter((t) => t.completedAt).length;
        const total = project.tasks.length;
        const completado = total === 0 ? 0 : (completed / total) * 100;
        return {
          id: project.id,
          name: project.name,
          taskCount: total,
          completation: Math.round(completado),
        };
      });
    }),
    //actions
    addProject,
    addTaskProject,
    toggleTaskProject,
  };
});
