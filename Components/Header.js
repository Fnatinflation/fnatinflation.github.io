import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const boxStyle = {
};

const Header = () => (
  <div style={boxStyle}>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/music">
      <a style={linkStyle}>Music</a>
    </Link>
  </div>
);

export default Header;