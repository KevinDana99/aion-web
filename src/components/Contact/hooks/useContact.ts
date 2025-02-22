import contactMessage from "@/examples/messages/contactMessage";
import useWhatsapp from "@/hooks/useWhatsapp";
import { useEffect, useState } from "react";

const useContact = () => {
  const [details, setDetails] = useState<{
    name: string;
    email: string;
    message: string;
  } | null>(null);
  const { handleSendWhatsappMessage } = useWhatsapp({});
  const handleUpdateName = (e) => {
    const newName = e.target.value;
    setDetails({ ...details, name: newName });
  };

  const handleUpdateEmail = (e) => {
    const newEmail = e.target.value;
    setDetails({ ...details, email: newEmail });
  };

  const handleUpdateMessage = (e) => {
    const newMessage = e.target.value;
    setDetails({ ...details, message: newMessage });
  };

  const handleSendTicket = () => {
    handleSendWhatsappMessage(
      contactMessage({
        name: details.name,
        message: details.message,
        email: details.email,
      }),
    );
  };

  return {
    details,
    handleUpdateMessage,
    handleUpdateEmail,
    handleUpdateName,
    handleSendTicket,
  };
};

export default useContact;
