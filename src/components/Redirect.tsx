import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

export default function Redirect(props: {link: string}){
  const navigate = useNavigate();
  useEffect(() => navigate(props.link), []);
  return null
}