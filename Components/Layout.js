import Header from './Header';
import React from 'react'
import MediaQuery from 'react-responsive'

const webStyle = {
  margin: "0 auto", width: "65%", overflowY: "scroll", height: "100%", overflowX: "hidden", border: '1px solid #DDD', backgroundColor: "#F2F2F2"
}
const mobileStyle = {
  margin: "0 auto", width: "100%", overflowY: "scroll", height: "100%", overflowX: "hidden", border: '1px solid #DDD', backgroundColor: "#F2F2F2"
}
const Layout = props => (
  <div>
    <Header />
    <div style={{ backgroundColor: "#D9D9D9", paddingTop: "40px", height: "100vh" }}>

      <MediaQuery maxDeviceWidth={1224}>
        <div style={mobileStyle}>
          {props.children}
        </div>
      </MediaQuery>
      
      <MediaQuery minDeviceWidth={1224}>
        <div style={webStyle}>
          {props.children}
        </div>
      </MediaQuery>

    </div>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossOrigin="anonymous"
    />
  </div>
);

export default Layout;