import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import "./Contacts.css";
import emailjs from "@emailjs/browser";

const Contacts: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const serviceId = "service_jsxg0wu"; // ID сервиса EmailJS
    const templateId = "template_ul4pwvy"; // ID шаблона
    const userId = "iR38rjvD1UyWbGZ44"; // Ваш пользовательский ID EmailJS

    try {
      await emailjs.send(serviceId, templateId, formData, userId);
      alert("Сообщение успешно отправлено!");
    } catch (error) {
      console.error("Ошибка отправки:", error);
      alert("Не удалось отправить сообщение. Попробуйте позже.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="contacts">
      {/* Contact Form */}
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
      {/* Contact Information */}
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
  );
};

export default Contacts;
