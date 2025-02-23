import type { NodeTypes } from "@xyflow/react"

import { PositionLoggerNode } from "./PositionLoggerNode"
import { AppNode } from "./types"
import CustomNode from "./CustomNode"

export const initialNodes: AppNode[] = [
  // { id: "a", type: "input", position: { x: 0, y: 0 }, data: { label: "wire" } },
  // {
  //   id: "b",
  //   type: "position-logger",
  //   position: { x: -100, y: 100 },
  //   data: { label: "drag me!" },
  // },
  // { id: "c", position: { x: 100, y: 100 }, data: { label: "your ideas" } },
  // {
  //   id: "d",
  //   type: "output",
  //   position: { x: 0, y: 200 },
  //   data: { label: "with React Flow" },
  // },
  {
    id: "1",
    type: "custom",
    position: { x: 0, y: 200 },
    data: {
      label: "cart_router.py",
      method: "add_item_to_cart",
      dependentLibs: ["sqlalchemy"],
      params: ["user_id", "item", "db"],
      responseObject: "JSONResponse",
    },
  },
  {
    id: "2",
    type: "custom",
    position: { x: 300, y: -100 },
    data: {
      label: "cart_service.py",
      method: "add_item_to_cart",
      dependentLibs: ["sqlalchemy"],
      params: ["user_id", "item", "db", "quantity"],
      responseObject: "CartItem",
    },
  },
  {
    id: "3",
    type: "custom",
    position: { x: 300, y: 500 },
    data: {
      label: "cart_service.py",
      method: "add_freebie_if_applicable",
      dependentLibs: ["sqlalchemy"],
      params: ["cart_id", "product_id", "db"],
      responseObject: "null",
    },
  },
  {
    id: "4",
    type: "custom",
    position: { x: 600, y: -300 },
    data: {
      label: "product_client.py",
      method: "check_inventory",
      dependentLibs: ["httpx"],
      params: ["product_id", "quantity"],
      responseObject: "bool",
    },
  },
  {
    id: "5",
    type: "custom",
    position: { x: 600, y: -100 },
    data: {
      label: "cart_crud.py",
      method: "update_inventory",
      dependentLibs: ["sqlalchemy"],
      params: ["product_id", "quantity"],
      responseObject: "None",
    },
  },
  {
    id: "6",
    type: "custom",
    position: { x: 600, y: 100 },
    data: {
      label: "product_client.py",
      method: "add_freebie_if_applicable",
      dependentLibs: ["sqlalchemy"],
      params: ["cart_id", "product_id", "db", "quantity"],
      responseObject: "CartItem",
    },
  },
  {
    id: "7",
    type: "custom",
    position: { x: 600, y: 300 },
    data: {
      label: "cart_crud.py",
      method: "get_freebie_mapping",
      dependentLibs: ["sqlalchemy"],
      params: ["product_id", "db"],
      responseObject: "FreebieMapping",
    },
  },
  {
    id: "8",
    type: "custom",
    position: { x: 600, y: 500 },
    data: {
      label: "product_client.py",
      method: "check_inventory",
      dependentLibs: ["httpx"],
      params: ["product_id", "quantity"],
      responseObject: "null",
    },
  },
  {
    id: "9",
    type: "custom",
    position: { x: 600, y: 700 },
    data: {
      label: "product_client.py",
      method: "check_inventory",
      dependentLibs: ["httpx,sqlalchemy"],
      params: ["product_id", "quantity", "db"],
      responseObject: "null",
    },
  },
]

export const nodeTypes = {
  "position-logger": PositionLoggerNode,
  custom: CustomNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes
