const useWhatsapp = ({
  destination = "+5492804979412",
}: {
  destination?: string;
}) => {
  const handleSendWhatsappMessage = (message: string) => {
    window.location.href = `https://wa.me/${destination}?text=${message}`;
  };

  return { handleSendWhatsappMessage };
};

export default useWhatsapp;
