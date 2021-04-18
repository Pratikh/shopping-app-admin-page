import './NavigationBar.scss';
import AddNewProduct from './AddNewProduct'

function NavigationBar() {
  console.log(AddNewProduct);
  return (
    <nav>
        <ul className="navigationBar">
          <AddNewProduct />
        </ul>
    </nav>
  );
}

export default NavigationBar;
