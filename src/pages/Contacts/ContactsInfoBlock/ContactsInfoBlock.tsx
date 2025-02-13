import { Typography } from "@mui/material"
import './ContactsInfoBlock.css'
import { TextBlock } from "../../../components/TextBlock/TextBlock"

export const ContactsInfoBlock = () => {
  return (
    <div className="contact-info">
      <Typography variant="h2" gutterBottom sx={{
          fontWeight: 'bold',
          fontSize: '3rem', 
          '@media (max-width: 800px)': {
              fontSize: '2rem',
          },
          '@media (max-width: 600px)': {
              fontSize: '1.5rem',
          },
      }}>
        Контакты
      </Typography>
      <TextBlock title="Юридический адрес" description="127322, г. Москва, улица Яблочкова, дом 41Б, 71"/>
      <TextBlock title="Телефон" description="7 (915) 011-45-56"/>
      <TextBlock title=" ИНН" description="7722487971"/>
      <TextBlock title="КПП" description="772201001"/>
      <TextBlock title="ОГРН" description="1207700173317"/>
      <TextBlock title = "электронная почта" description="zakaz@lubricor.ru" />
      
    </div>
  )
}