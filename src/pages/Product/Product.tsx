import React from 'react';
import './Product.css';
import PageBody from '../../components/PageBody/PageBody';
import { useAppContext } from '../../context/AppContext';
import { data } from '../../helpers/mockData';
import { Icon } from '@mui/material';
import DangerousIcon from '@mui/icons-material/Dangerous';


export const Product: React.FC = () => {
  const { categoryTag, productTag } = useAppContext()
  const category = data.find(item => item.tag === categoryTag)
  const product = category?.products.find(item => item.name.includes(productTag))  // TODO
  if (!product || !category) return (
    <PageBody>
      <div className="category">
        <div className="category-title">Продукт не найден</div>
        <div className="category-information">
          К сожалению, запрашиваемый продукт не найден. Попробуйте выбрать другой продукт или категорию.
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
      <div className="product-header-block">
        <div className="product-title-block">
          <div className="product-title">{product?.name}</div>
          <div className="product-category">{category?.categoryName}</div>
        </div>
        <div className="product-information">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
      {/* <div className="product-specifications-block">
      </div> */}
    </PageBody>
  );
};
