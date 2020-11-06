import React from 'react'
import Cards from './Cards.js'
const CardSection = () => (

    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
         <Cards title='Sports' click='Go Page'/>
         <Cards />
         <Cards />
         
        </div>
      </div>
    </section>



) 


export default CardSection;