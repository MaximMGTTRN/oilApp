import { Typography } from "@mui/material"
import "./TextBlock.css"
interface TextBlockProps{
    title: string,
    description: string
}
export const TextBlock = ({title, description}:TextBlockProps) => {
  return (
    <div className="text-block">
        <Typography variant="h6" sx={{
          opacity: 0.5,
          fontSize: '1.5rem', 
          '@media (max-width: 800px)': {
              fontSize: '1.2rem',
          },
          '@media (max-width: 600px)': {
              fontSize: '1.1rem',
          },
      }} gutterBottom>
        {title}
        </Typography>
        <Typography style={{ fontWeight: 550}} variant="body1">{description}</Typography>
      </div>
  )
}
