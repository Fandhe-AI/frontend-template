import * as projectAnnotations from "./react-vite-preview";
import baseAnnotations from "./vitest.setup";

const annotations = [...baseAnnotations, projectAnnotations] as const;

export default annotations;
