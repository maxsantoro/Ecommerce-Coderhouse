import { DescriptionOutlined, InfoOutlined, LocalOfferOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { ProductContainer, Circle, Image, Info, Icon,OutOfStockContainer,  } from './styledComponents';

const Item = ({ id, title, stock, price, pictureUrl }) => {

    return (
        stock > 0 ?
        <ProductContainer>
            <Circle />
            <Image src={pictureUrl} />
            <Info>
                <Icon>
                    <LocalOfferOutlined /><strong>$ {price}</strong>
                </Icon>
                <Icon>
                    <DescriptionOutlined />{stock} unid.
                </Icon>
                <Icon style={{cursor: "pointer"}}>
                    <Link to={`/item/${id}`}><InfoOutlined />Details</Link>
                </Icon>
            </Info>
        </ProductContainer>
     :
    
     <OutOfStockContainer>
     <Circle />
     <Image src={pictureUrl} />
     {/* TODO : Poner otros estilos para que se diferencie mas los productos sin stock */}
     <Info>
         <Icon>
             <LocalOfferOutlined /><strong>$ {price}</strong>
         </Icon>
         <Icon>
             <DescriptionOutlined /> <strong className="ml-4">Agotado</strong>
         </Icon>
         <Icon style={{cursor: "pointer"}}>
             <Link to={`/item/${id}`}><InfoOutlined />Details</Link>
         </Icon>
     </Info>
 </OutOfStockContainer>
    
    );
}

export default Item;