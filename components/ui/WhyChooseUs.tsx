"use client";
import React from "react";
import {StickyScroll} from "../ui/sticky-scroll-reveal"
 
 
const content = [
    {
      title: "Professional Music Training",
      description:
        "Learn music from experienced instructors who guide you step by step. Our structured lessons help students build strong foundations in theory, technique, and performance across multiple instruments.",
     
    },
    {
      title: "Live Practice Sessions",
      description:
        "Join live practice sessions and improve your skills in real time. Get instant feedback from instructors, practice with fellow students, and grow your confidence through interactive learning.",
      
    },
    {
      title: "Performance & Stage Training",
      description:
        "Prepare for the stage with our performance-focused training. Learn how to perform confidently in front of an audience, master stage presence, and refine your musical expression.",
      
    },
    {
      title: "Music Theory & Composition",
      description:
        "Understand the language of music with in-depth theory lessons and composition techniques. From reading sheet music to creating original compositions, we help you turn creativity into sound.",
      
    },
  ];
  

export default function WhyChooseUs() {
  return (
    <div >
        <StickyScroll content={content}/>
    </div>
  )
}
