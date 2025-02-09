import React from 'react';
import './Category.css';
import PageBody from '../../components/PageBody/PageBody';
import { useAppContext } from '../../context/AppContext';
import { data } from '../../helpers/mockData';
import { Card, CardActionArea, CardContent, CardMedia, Icon, Typography } from '@mui/material';
import DangerousIcon from '@mui/icons-material/Dangerous';
import { useNavigate } from "react-router-dom";

export const Category: React.FC = () => {
  const { categoryTag } = useAppContext()
  const category = data.find(item => item.tag === categoryTag)
  const products = category?.products
  if (!category) return (
    <PageBody>
      <div className="category">
        <div className="category-title">Категория не найдена</div>
        <div className="category-information">
          К сожалению, запрашиваемая категория не найдена. Попробуйте выбрать другую категорию. или вернуться на главную страницу
        </div>
        <Icon className="category-notfound-icon" component={DangerousIcon} sx={{
          fontSize: 150,
          opacity: 0.5
        }} />
      </div>
    </PageBody>
  )
  return (
    <PageBody>
      <div className="category">
        <div className="category-title">{category?.categoryName}</div>
        {/* <Typography className="category-information" variant="h6" sx={{ color: 'text.secondary' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography> */}
        <div className="category-information">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="category-cards">
          {products?.map(product => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </PageBody>
  );
};

export const ProductCard: React.FC<any> = ({ product }) => {
  const navigate = useNavigate();
  const iso = [22, 32, 46, 68, 100, 150]
  return (
    <Card sx={{ maxWidth: 250 }} onClick={() => {
      navigate(product.link)
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/newLogo.png"
          alt="LUBRICOR OIL"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {product.name}
          </Typography>
          <div className='product-iso'>
            {iso.map((item, index) => (
              <Typography key={index} variant="body2" color="text.secondary">
                {item}
              </Typography>
            ))}
          </div>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
