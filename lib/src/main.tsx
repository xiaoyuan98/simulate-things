import React, {  useEffect }  from 'react'
import Core from './utils/core'
import ModelManager from './utils/modelManager'
import './main.css'

interface Props{
}


function SimulateThings(props:Props) {

  useEffect(() =>{
    const core = new Core();
    core.startAnimation()

    const modelManager = new ModelManager();
    const models = modelManager.getModels();

    models.forEach(model => {
      core.scene.add(model)
    })

  },[])

  return (
    <div className="simulate-things-container" id="simulate-things"></div>
  )
}

export default SimulateThings
