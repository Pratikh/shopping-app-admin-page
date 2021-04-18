import './NavigationBar.scss';
import AddNewProduct from './AddNewProduct'

function NavigationBar() {
  return (
    <nav>
        <ul className="navigationBar">
          <AddNewProduct />
        </ul>
    </nav>
  );
}

export default NavigationBar;
