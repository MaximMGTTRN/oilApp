import React from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useAppContext } from "../../../context/AppContext";
import './ContactsFormBlock.css'

interface IContactsFormBlockProps {

}

export const ContactsFormBlock = () => {
  const { handleSubmit, handleChange, formData, isSending } = useAppContext();
  return (
    <div className="contact-form">
      <Typography variant="h6" gutterBottom>
        Свяжитесь с нами
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Ваше имя"
            name="name"
            variant="outlined"
            required
            fullWidth
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            label="Ваш e-mail"
            name="email"
            variant="outlined"
            type="email"
            required
            fullWidth
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            label="Сообщение"
            name="message"
            variant="outlined"
            multiline
            rows={4}
            required
            fullWidth
            value={formData.message}
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSending}
          >
            {isSending ? "Отправка..." : "Отправить"}
          </Button>
        </Box>
      </form>
    </div>
  )
}