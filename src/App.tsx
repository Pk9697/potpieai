import { useCallback } from "react"
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  addEdge,
  useNodesState,
  useEdgesState,
  type OnConnect,
  BackgroundVariant,
} from "@xyflow/react"

import "@xyflow/react/dist/style.css"

import { initialNodes, nodeTypes } from "./nodes"
import { initialEdges, edgeTypes } from "./edges"
import RightSection from "./components/RightSection"

export default function App() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  )

  return (
    <div className='h-screen grid grid-cols-[1fr_350px]'>
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        edges={edges}
        edgeTypes={edgeTypes}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        colorMode='dark'
      >
        <Background color='#212121' variant={BackgroundVariant.Lines} />
        <MiniMap />
        <Controls />
      </ReactFlow>

      <RightSection />
    </div>
  )
}
