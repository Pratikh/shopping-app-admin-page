import './NavigationBar.scss';
import AddNewProduct from './AddNewProduct'

function NavigationBar() {
  return (
    <nav style={{
      display: "flex",
    }}>
        <h2>ShopBridge</h2>
        <ul className="navigationBar">
          <AddNewProduct />
        </ul>
    </nav>
  );
}

export default NavigationBar;
