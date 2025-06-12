import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2022',
    title: 'Bsc(CA & IT)',
    subtitle: 'Ganapat University',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2024',
    title: 'Client:NRLifesciences',
    subtitle: 'Frontend Project',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-4, -1, -4),
    year: '2024',
    title: 'XcelTech PVT LTD',
    subtitle: 'FullStack Intern',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: '2025',
    title: 'Client:KaushaLogistics',
    subtitle: 'Frontend Project',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: new Date().toLocaleDateString('default', { year: 'numeric' }),
    title: '?',
    subtitle: '???',
    position: 'right',
  }
]