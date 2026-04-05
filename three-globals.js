import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

window.THREE = THREE;
window.OrbitControls = OrbitControls;
window.dispatchEvent(new Event('three-ready'));
