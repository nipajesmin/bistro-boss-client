import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/Menu/banner3.jpg'
import useMenu from '../../hooks/useMenu';
import banner3 from '../../assets/Menu/menu-bg.png'

import soupImg from '../../assets/Menu/soup-bg.jpg'
import saladImg from '../../assets/Menu/salad-bg.jpg'
import pizzaImg from '../../assets/Menu/pizza-bg.jpg'
import dessertImg from '../../assets/Menu/dessert-bg.jpeg'
import SectionTitle from '../../component/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="our menu"></Cover>
             {/* main cover */}
             <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
             {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items  */}
            <MenuCategory items={desserts} title="dessert" img={dessertImg}></MenuCategory>
            <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
            <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
            <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;