import React, { createContext, useContext, useState, ReactNode } from "react";
import emailjs from "@emailjs/browser";

interface AppContextType {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isSending: boolean;
  formData: any;
  categoryTag: string;
  productTag: string;
  setCategoryTag: (value: string) => void;
  setProductTag: (value: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [categoryTag, setCategoryTag] = useState('');
  const [productTag, setProductTag] = useState('');

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

    // const serviceId = "service_jsxg0wu"; // ID сервиса EmailJS
    // const templateId = "template_ul4pwvy"; // ID шаблона
    // const userId = "iR38rjvD1UyWbGZ44"; // Ваш пользовательский ID EmailJS

    // try {
    //   await emailjs.send(serviceId, templateId, formData, userId);
    //   alert("Сообщение успешно отправлено!");
    // } catch (error) {
    //   console.error("Ошибка отправки:", error);
    //   alert("Не удалось отправить сообщение. Попробуйте позже.");
    // } finally {
    //   setIsSending(false);
    // }
    setIsSending(false);

  };

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        handleChange,
        handleSubmit,
        isSending,
        formData,
        categoryTag,
        productTag,
        setCategoryTag,
        setProductTag
      }}>
      {children}
    </AppContext.Provider>
  );
};
