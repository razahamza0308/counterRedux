import React from 'react';
import { useSelector } from "react-redux";


export default function ComponentTwo() {

  const myCounter = useSelector(state => state.counter);

  return (
    <div>
      {/* <h2>Second Component :{myCounter}</h2> */}
    </div>
  )
}
