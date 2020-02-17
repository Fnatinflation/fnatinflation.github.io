import Header from './Header';

const Layout = props => (
  <div>
    <Header />
    <div style={{ backgroundColor: "#D9D9D9", paddingTop: "40px", height: "100%" }}>
      <div style={{ margin: "0 auto", width: "50%", height: "100%", overflowY: "scroll",overflowY:"hidden",overflowX:"hidden", border: '1px solid #DDD', backgroundColor: "#F2F2F2" }}>
        {props.children}
      </div>
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