import Link from 'next/link';

const linkStyle = {
    marginRight: 15
};

const Header = props => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/andri">
            <a style={linkStyle}>Andri Setiono</a>
        </Link>
    </div>
);

export default Header;