import { Typography } from "@mui/material"
import './ContactsInfoBlock.css'

export const ContactsInfoBlock = () => {
  return (
    <div className="contact-info">
      <Typography variant="h6" gutterBottom>
        Адрес
      </Typography>
      <Typography variant="body1">
        127322, г. Москва, улица Яблочкова, дом 41Б, 71
      </Typography>

      <Typography variant="h6" gutterBottom>
        Телефон
      </Typography>
      <Typography variant="body1">+ 7 (915) 011-45-56</Typography>

      <Typography variant="h6" gutterBottom>
        E-mail
      </Typography>
      <Typography variant="body1">zakaz@lubricor.ru</Typography>
    </div>
  )
}