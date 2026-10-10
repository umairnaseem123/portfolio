"use client";
import { motion, useReducedMotion } from "framer-motion";
const nodes = [[10,20],[28,60],[45,25],[62,70],[78,30],[90,65],[55,48],[20,85],[85,88]];
const links = [[0,1],[0,2],[2,6],[1,6],[6,3],[6,4],[4,5],[3,5],[1,7],[3,8],[5,8],[2,4]];
const labels: Record<number, string> = { 0: "Python", 2: "C++", 4: "OSPF", 5: "Java", 3: "VLAN", 1: "SQL" };
export default function NetworkBg() {
  const still = useReducedMotion();
  return (
    <svg className="absolute inset-0 h-full w-full opacity-70" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" aria-hidden>
      {links.map(([a, b], i) => (
        <g key={i}>
          <line x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="#1C2A44" strokeWidth=".2" />
          <motion.circle r=".55" fill="#22D3EE" initial={{ cx: nodes[a][0], cy: nodes[a][1] }}
            animate={still ? undefined : { cx: [nodes[a][0], nodes[b][0]], cy: [nodes[a][1], nodes[b][1]] }}
            transition={{ duration: 3 + (i % 4), repeat: Infinity, ease: "linear", delay: i * 0.4 }} />
        </g>
      ))}
      {nodes.map(([x, y], i) => (
        <motion.g key={i} animate={still ? undefined : { y: [0, -1.2, 0] }} transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}>
          <circle cx={x} cy={y} r="1" fill="#0E1524" stroke="#22D3EE" strokeWidth=".25" />
          {labels[i] && <text x={x + 1.8} y={y + 0.6} fontSize="1.9" fill="#8FA3C0">{labels[i]}</text>}
        </motion.g>
      ))}
    </svg>
  );
}
