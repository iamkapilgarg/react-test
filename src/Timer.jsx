import { render } from "@testing-library/react";
import {React, useEffect, useState} from "react";


export default function Timer() {

  let [state, setState] = useState({seconds: 0})

  const tick = () => {
    setState(state => ({
      seconds: state.seconds + 1
    }))
  }

  useEffect(() => {
    setInterval(() => tick(), 1000)
  }, [])

  return (
    <div>
      Seconds: {state.seconds}
    </div>
  )
}