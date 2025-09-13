import { useGLTF } from "@react-three/drei"
import { useEffect } from "react"

export default function ModelDebugger() {
  const { nodes, materials } = useGLTF("/models/lanyard.glb")

  useEffect(() => {
    console.log("📦 Nodes:", nodes)
    console.log("🎨 Materials:", materials)
  }, [nodes, materials])

  return null
}