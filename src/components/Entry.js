import React from 'react'
import { marked } from 'marked'
import { useDispatch, useSelector } from 'react-redux'
import { change, textim } from '../redux/mark/markSlice';

export default function Entry() {
  const ic = useSelector(state => state.mark.ic)
  const helping = useSelector(state => state.mark.helping);
  const dispatch = useDispatch();
  return (
    <div>
        <textarea name="enter" id="enter" value={ic} onChange={(e) =>{
          dispatch(change(marked.parse(e.target.value)))
          dispatch(textim(e.target.value))
        }} disabled={helping}></textarea>
    </div>
  )
}
