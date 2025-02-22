const contactMessage = ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) => {
  return `Hola, mi nombre es ${name}, quiero abrir un ticket por el siguiente motivo: ${message}. Mi email de contacto es ${email}`;
};

export default contactMessage;
