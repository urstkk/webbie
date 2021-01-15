import React, { Component } from 'react';
import { IProps, IState } from '../Models/ActionTypes';

class Footer extends Component<IProps, IState> {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map((network:any)=>{
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
      var pageViewCounts = this.props.data.PageViewCount.map((lCount:any)=>{
        return <img src={lCount.viewCountUrl} alt="Hits"></img>
      })
    }

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>

           <ul className="copyright">
              <li>&copy; Copyright 2021 Krishna Kishore</li>
              <li>{pageViewCounts}</li>
              {/* <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li> */}
           </ul>

        </div>
        
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
