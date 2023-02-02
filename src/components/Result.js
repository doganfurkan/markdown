import React from 'react'
import { useSelector } from 'react-redux'
import "highlight.js/styles/github.css";
import hljs from "highlight.js";
import { useEffect } from "react";

export default function Result() {
  const text = useSelector(state => state.mark.entry)

  useEffect(() => {
    hljs.highlightAll();
    console.log("highlight");
    for(let i = 0;i < document.getElementsByTagName("code").length;i++){
      let value = "";
      let lines = document.getElementsByTagName("code")[i].innerHTML.split(/\r\n|\r|\n/).length;
      if(lines == 1){
        value = "1"
      }else{
        for(let z = 1;z < lines;z++){
          value += `${z}\n`;
        }
      }
      document.getElementsByTagName("code")[i].setAttribute("data-line",value)
    }
  }, [text]);
  return (
    <div id="res" dangerouslySetInnerHTML={{ __html : text}}>
    </div>
  )
}
