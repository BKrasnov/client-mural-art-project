import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useSubmitForm(isFormSubmitted: boolean, navigateTo: string) {
  const navigate = useNavigate();
  useEffect(() => {
    if (isFormSubmitted) {
      navigate(navigateTo);
    }
  }, [isFormSubmitted, navigateTo, navigate]);
}
