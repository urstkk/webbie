import React, { Component } from 'react';
import { IProps, IState } from '../Models/ActionTypes';

class Testimonials extends Component<IProps, IState> {
  render() {

    if(this.props.data){
      var testimonials = this.props.data.testimonials.map((testimonials:any)=>{
        return  <li key={testimonials.user}>
            <blockquote>
               <p>{testimonials.text}</p>
               <cite>{testimonials.user}</cite>
            </blockquote>
         </li>
      })
    }

    return (
      <section id="testimonials">
      {/* <div className="text-container"> */}
         <div className="row">

            <div className="two columns header-col">
               <h1><span>Client Testimonials</span></h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {testimonials}
                  </ul>
               </div>
            </div>
         {/* </div> */}
   </section>
    );
  }
}

export default Testimonials;
