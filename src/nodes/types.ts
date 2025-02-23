import type { Node, BuiltInNode } from '@xyflow/react';

export type PositionLoggerNode = Node<{ label: string }, 'position-logger'>;
export type CustomNode = Node<{
    label: string;
    method: string;
    dependentLibs: string[];
    params: string[];
    responseObject: string;
}, 'custom'>;
export type AppNode = BuiltInNode | PositionLoggerNode | CustomNode;
