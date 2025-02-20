import { TextField, Button, Box, Typography, Checkbox, FormControlLabel, FormHelperText } from "@mui/material";
import { Link } from "react-router-dom";
//import { useAppContext } from "../../../context/AppContext";
import './ContactsFormBlock.css'
import { Controller, useForm } from "react-hook-form";
import { ContactsFormSchema, ContactsFormType } from "./shemaOfForm/ContactsFormShema";
import { zodResolver } from "@hookform/resolvers/zod";


export const ContactsFormBlock = () => {
  //const { handleSubmit, handleChange, formData, isSending } = useAppContext();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactsFormType>({
    resolver: zodResolver(ContactsFormSchema()),
    defaultValues: {
      name:"",
      email:"",
      message: "",
      agree: false,
    },
  });
  const ifOk = ({name,email,message}:ContactsFormType)=>{
    console.log(name, email, message);
  }
  return (
    <div className="contact-form">
      <Typography style={{marginBottom:40, fontWeight: "bold"}} variant="h5" gutterBottom>
        Свяжитесь с нами
      </Typography>
      <form>
        <Box display="flex" flexDirection="column" gap={2}>
        <Controller control={control} name="name" render={({field:{onChange, value}})=>(
          <TextField
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "white", 
              },
            }}
            label="Ваше имя"
            name="name"
            variant="outlined"
            required
            fullWidth
            value={value}
            onChange={onChange}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        )}/>
        <Controller control={control} name="email" render={({field:{onChange, value}})=>(
          <TextField
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "white", 
              },
            }}
            label="Ваш e-mail"
            name="email"
            variant="outlined"
            required
            fullWidth
            value={value}
            onChange={onChange}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        )}/>
        <Controller control={control} name="message" render={({field:{onChange, value}})=>(
          <TextField
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "white",
              },
            }}
            label="Сообщение"
            multiline
            name="message"
            minRows={2}
            variant="outlined"
            required
            fullWidth
            value={value}
            onChange={onChange}
            error={!!errors.message}
            helperText={errors.message?.message}
          />
        )}/>
          <div className="checkbox">
            <Controller control={control} name="agree" render={({field:{onChange, value}})=>(
             <div>
             <FormControlLabel
               control={
                 <Checkbox
                   checked={value}
                   onChange={(e) => onChange(e.target.checked)}
                 />

               }
               label={
                <Typography>
                  Нажимая кнопку “Отправить”, я даю согласие на обработку своих персональных данных и соглашаюсь с{" "}
                  <Link className="links" to="/user_agreement">Условиями использования</Link>{" "}
                  и{" "}
                  <Link className="links" to="/privacy_policy" >Политикой конфиденциальности</Link>.
                </Typography>
              }
             />
             {errors && (
               <FormHelperText style={{marginLeft:30}} error={true}>{errors.agree?.message}</FormHelperText>
             )}
           </div>
            )}/>
          </div>
          <Button
            type="submit"
            variant="contained"
            style={{ backgroundColor: "#247277", height: 65, marginBlock: 20 }}
            disabled={errors.root===null}
            onClick={handleSubmit(ifOk)}
          >
            Отправить
            {/* {isSending ? "Отправка..." : "Отправить"} */}
          </Button>
        </Box>
      </form>
    </div>
  )
}
