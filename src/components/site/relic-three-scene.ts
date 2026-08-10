import {
  ACESFilmicToneMapping,
  BoxGeometry,
  CapsuleGeometry,
  CircleGeometry,
  Clock,
  CylinderGeometry,
  Group,
  HemisphereLight,
  Mesh,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  PCFSoftShadowMap,
  PerspectiveCamera,
  PointLight,
  Scene,
  ShadowMaterial,
  SphereGeometry,
  SpotLight,
  SRGBColorSpace,
  TorusGeometry,
  WebGLRenderer,
} from "three";

export function mountRelicScene(host: HTMLDivElement, pointerTarget: HTMLDivElement) {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
  const scene = new Scene();
  const camera = new PerspectiveCamera(29, 1, 0.1, 100);
  camera.position.set(0, 0.08, 8.4);

  const renderer = new WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.08;
  renderer.shadowMap.enabled = !coarsePointer;
  renderer.shadowMap.type = PCFSoftShadowMap;
  renderer.domElement.setAttribute("aria-hidden", "true");
  renderer.domElement.className = "relic-canvas";
  host.appendChild(renderer.domElement);

  const group = new Group();
  group.rotation.set(-0.05, -0.22, -0.08);
  scene.add(group);

  const lacquer = new MeshPhysicalMaterial({
    color: 0x310510,
    roughness: 0.16,
    metalness: 0.34,
    clearcoat: 1,
    clearcoatRoughness: 0.12,
    iridescence: 0.18,
    iridescenceIOR: 1.42,
  });
  const chrome = new MeshPhysicalMaterial({
    color: 0xd8dde3,
    roughness: 0.12,
    metalness: 1,
    clearcoat: 0.72,
  });
  const blackGlass = new MeshPhysicalMaterial({
    color: 0x09080a,
    roughness: 0.08,
    metalness: 0.4,
    transmission: 0.06,
    clearcoat: 1,
  });
  const signal = new MeshStandardMaterial({
    color: 0xff335d,
    emissive: 0xb90836,
    emissiveIntensity: 3.2,
    roughness: 0.28,
  });

  const lobeGeometry = new SphereGeometry(1.28, 56, 36);
  const leftLobe = new Mesh(lobeGeometry, lacquer);
  leftLobe.position.set(-1.14, -0.05, 0);
  leftLobe.scale.set(1.16, 0.92, 0.73);
  leftLobe.castShadow = true;
  group.add(leftLobe);

  const rightLobe = leftLobe.clone();
  rightLobe.position.x = 1.14;
  rightLobe.scale.x = 1.1;
  group.add(rightLobe);

  const bridge = new Mesh(new CapsuleGeometry(0.34, 2.15, 10, 24), chrome);
  bridge.rotation.z = Math.PI / 2;
  bridge.position.set(0, 0.6, 0.3);
  bridge.scale.set(0.86, 1, 0.72);
  bridge.castShadow = true;
  group.add(bridge);

  const arch = new Mesh(new TorusGeometry(1.08, 0.1, 18, 72, Math.PI), chrome);
  arch.rotation.set(Math.PI / 2, 0, Math.PI);
  arch.position.set(0, 0.55, 0.75);
  group.add(arch);

  const windowMesh = new Mesh(new BoxGeometry(2.52, 0.5, 0.18), blackGlass);
  windowMesh.position.set(0, -0.18, 1.02);
  windowMesh.rotation.x = -0.04;
  group.add(windowMesh);

  const waveform = new Group();
  const heights = [
    0.12, 0.24, 0.4, 0.22, 0.56, 0.34, 0.18, 0.46, 0.68, 0.3, 0.48, 0.2, 0.36, 0.16, 0.28,
  ];
  heights.forEach((height, index) => {
    const bar = new Mesh(new BoxGeometry(0.075, height, 0.04), signal);
    bar.position.set(-1.08 + index * 0.154, 0, 0);
    waveform.add(bar);
  });
  waveform.position.set(0, -0.18, 1.13);
  group.add(waveform);

  for (const x of [-1.17, 1.17]) {
    const bolt = new Mesh(new CylinderGeometry(0.09, 0.09, 0.08, 24), chrome);
    bolt.rotation.x = Math.PI / 2;
    bolt.position.set(x, -0.18, 1.15);
    group.add(bolt);
  }

  const ring = new Mesh(new TorusGeometry(0.27, 0.045, 16, 48), signal);
  ring.position.set(1.55, 0.72, 0.78);
  ring.rotation.x = Math.PI / 2;
  group.add(ring);

  const shadow = new Mesh(
    new CircleGeometry(2.65, 64),
    new ShadowMaterial({ color: 0x000000, opacity: 0.42 }),
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.set(0, -1.35, 0);
  shadow.scale.y = 0.36;
  shadow.receiveShadow = true;
  scene.add(shadow);

  scene.add(new HemisphereLight(0xffedf1, 0x14030a, 1.9));
  const key = new SpotLight(0xffd7dc, 72, 20, Math.PI / 5, 0.6, 1.2);
  key.position.set(-4, 5, 7);
  key.castShadow = !coarsePointer;
  scene.add(key);
  const rim = new PointLight(0xff174f, 35, 14, 1.5);
  rim.position.set(4, -1, 4);
  scene.add(rim);
  const cool = new PointLight(0x87e8ff, 18, 12, 1.5);
  cool.position.set(-3, 1, -2);
  scene.add(cool);

  const pointer = { x: 0, y: 0 };
  const onPointerMove = (event: PointerEvent) => {
    if (reducedMotion || coarsePointer) return;
    const rect = pointerTarget.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
  };
  const onPointerLeave = () => {
    pointer.x = 0;
    pointer.y = 0;
  };
  pointerTarget.addEventListener("pointermove", onPointerMove);
  pointerTarget.addEventListener("pointerleave", onPointerLeave);

  const resize = () => {
    const rect = host.getBoundingClientRect();
    const width = Math.max(1, Math.round(rect.width));
    const height = Math.max(1, Math.round(rect.height));
    const aspect = width / height;

    renderer.setSize(width, height, false);
    camera.aspect = aspect;
    camera.position.z = aspect < 0.82 ? 9.5 : aspect < 1.05 ? 9.0 : 8.45;
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
  };
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(host);
  resize();

  let visible = true;
  const visibilityObserver = new IntersectionObserver((entries) => {
    visible = entries[0]?.isIntersecting ?? false;
  });
  visibilityObserver.observe(host);

  const clock = new Clock();
  let animationFrame = 0;
  const render = () => {
    if (visible) {
      const elapsed = clock.getElapsedTime();
      if (!reducedMotion) {
        group.rotation.y += (pointer.x * 0.2 - 0.22 - group.rotation.y) * 0.055;
        group.rotation.x += (pointer.y * 0.12 - 0.05 - group.rotation.x) * 0.055;
        group.position.y = Math.sin(elapsed * 0.72) * 0.055;
        waveform.children.forEach((child, index) => {
          child.scale.y = 0.76 + Math.sin(elapsed * 2.4 + index * 0.72) * 0.24;
        });
      }
      renderer.render(scene, camera);
    }
    if (!reducedMotion) animationFrame = window.requestAnimationFrame(render);
  };
  render();

  return () => {
    window.cancelAnimationFrame(animationFrame);
    visibilityObserver.disconnect();
    resizeObserver.disconnect();
    pointerTarget.removeEventListener("pointermove", onPointerMove);
    pointerTarget.removeEventListener("pointerleave", onPointerLeave);
    group.traverse((object) => {
      if (object instanceof Mesh) {
        object.geometry.dispose();
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        materials.forEach((material) => material.dispose());
      }
    });
    shadow.geometry.dispose();
    shadow.material.dispose();
    renderer.dispose();
    renderer.domElement.remove();
  };
}
