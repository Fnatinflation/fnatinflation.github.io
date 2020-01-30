import Header from './Header';
const layoutStyle = {
  backgroundColor:"#F2F2F2"
}
const Layout = props => (
  <div>
    <Header />
    <body style={layoutStyle}>
      {props.children}
    </body>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
  </div>
);

export default Layout;