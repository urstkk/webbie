import React, { Component } from 'react';
import {IProps,IState} from './Models/ActionTypes';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
// import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';

class App extends Component<IProps, IState> {

  constructor(props:IProps){
    super(props);
   this.state = {     
      resumeData: {}
    };
    
    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'./resumeData.json',
      dataType:'json',
      cache: false,
      success: (data:any)=>{
        this.setState({resumeData: data});
      },
      error: (xhr:any, status:any, err:any)=>{
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
     /* { <Contact data={this.state.resumeData.main}/>} */
  }

  render() {
    const webbieProps = { 
      main: this.state.resumeData.main,
     resume: this.state.resumeData.resume,
     portfolio:this.state.resumeData.portfolio,
     testimonials:this.state.resumeData.testimonials,
     contactForm: this.state.resumeData.main
        }
    return (
  
      <div className="App">
        <Header data={webbieProps.main}/>
        <About data={webbieProps.main}/>       
        <Portfolio data={webbieProps.portfolio}/>
        <Testimonials data={webbieProps.testimonials}/>     
        <Contact data={webbieProps.contactForm}/>  
        <Resume data={webbieProps.resume}/>
        <Footer data={webbieProps.main}/>
      </div>
    );
  }
}

export default App;
