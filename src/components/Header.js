import { useLocation } from 'react-router-dom';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}
          color={showAdd ? 'red' : 'steelblue'}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: 'タスクトラッカー',
};
export default Header;
