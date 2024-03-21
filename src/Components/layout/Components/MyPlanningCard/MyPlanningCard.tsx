import { Button } from 'antd'

import './MyPlanningCard.css'

const MyPlanningCard = () => {
  return (
    <div className='my-planning-card'>
      <div className='my-planning-card__title'>
        <h3>Mi Plan - Plus</h3>
        <p>El uso se renueva el 3-may-2023</p>
      </div>
      <div className='my-planning-card__content'>
        <div className='my-planning-card__content-item'>
          <span>Almacenamiento</span>
          <p>23.5GB/1TB</p>
        </div>
        <div className='my-planning-card__progress'>
          <div className='my-planning-card__progress-bar-70'></div>
        </div>
      </div>
      <div className='my-planning-card__content'>
        <div className='my-planning-card__content-item'>
          <span>Banda Mensual</span>
          <p>3.4TB/5TB</p>
        </div>
        <div className='my-planning-card__progress'>
          <div className='my-planning-card__progress-bar-60'></div>
        </div>
      </div>
      <Button className='my-planning-card__button' type='primary' shape='round'>
        Administrar Plan
      </Button>
    </div>
  )
}

export default MyPlanningCard
