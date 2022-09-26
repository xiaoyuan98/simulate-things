import {  useEffect }  from 'react'
import Core from '@/core'
import ModelManager from '@/modelManager'
import './main.css'

interface Props{
}


function SimulateThings(props:Props) {

  useEffect(() =>{
    const core = new Core();
    core.startAnimation()

    const modelManager = new ModelManager();
    const model = modelManager.getModelByMenu(modelManager.modelMenu[0]);

    core.scene.add(model.mesh)

  },[])

  return (
    <div className="simulate-things-container" id="simulate-things"></div>
  )
}

export default SimulateThings
