import { Handle, NodeProps, Position } from "@xyflow/react"
import redirect from "../assets/redirect.png"
import { type CustomNode } from "./types"

const CustomNode = ({ data }: NodeProps<CustomNode>) => {
  return (
    <div className='shadow-lg rounded-sm border border-accent-orange bg-bg-node min-w-[250px] text-white'>
      <div className='px-4 py-2 flex items-center justify-between mb-2 border-b border-accent-orange'>
        <div className='font-medium text-sm'>{data.label}</div>
        <a href='/' className='cursor-pointer size-4'>
          <img src={redirect} />
        </a>
      </div>
      <div className='px-4 py-2 pb-4'>
        <div className='font-medium text-sm mb-2'>{data.method}</div>
        <div className='space-y-1 text-[0.625rem]'>
          <div>
            <span className='text-accent-orange'>"DependentLibs" </span>:{" "}
            {`[${data.dependentLibs.join(", ")}]`}
          </div>
          <div>
            <span className='text-accent-orange'>"Params" </span>:{" "}
            {`[${data.params.join(", ")}]`}
          </div>
          <div>
            <span className='text-accent-orange'>"ResponseObject" </span>:{" "}
            {data.responseObject}
          </div>
        </div>
      </div>
      <Handle type='source' position={Position.Right} />
      <Handle type='target' position={Position.Left} />
    </div>
  )
}

export default CustomNode
