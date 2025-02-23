import { MarkerType, type Edge, type EdgeTypes } from "@xyflow/react"

export const initialEdges: Edge[] = [
  // { id: 'a->c', source: 'a', target: 'c', animated: true },
  // { id: 'b->d', source: 'b', target: 'd' },
  // { id: 'c->d', source: 'c', target: 'd', animated: true },
  {
    id: "e1-2",
    source: "1",
    target: "2",
    type: "step",
    markerEnd: { type: MarkerType.Arrow },
  },
  {
    id: "e1-3",
    source: "1",
    target: "3",
    type: "step",
    markerEnd: { type: MarkerType.Arrow },
  },
  {
    id: "e2-4",
    source: "2",
    target: "4",
    type: "step",
    markerEnd: { type: MarkerType.Arrow },
  },
  {
    id: "e2-5",
    source: "2",
    target: "5",
    type: "step",
    markerEnd: { type: MarkerType.Arrow },
  },
  {
    id: "e2-6",
    source: "2",
    target: "6",
    type: "step",
    markerEnd: { type: MarkerType.Arrow },
  },
  {
    id: "e3-7",
    source: "3",
    target: "7",
    type: "step",
    markerEnd: { type: MarkerType.Arrow },
  },
  {
    id: "e3-8",
    source: "3",
    target: "8",
    type: "step",
    markerEnd: { type: MarkerType.Arrow },
  },
  {
    id: "e3-9",
    source: "3",
    target: "9",
    type: "step",
    markerEnd: { type: MarkerType.Arrow },
  },
]

export const edgeTypes = {
  // Add your custom edge types here!
} satisfies EdgeTypes
