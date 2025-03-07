import { BsPersonWalking } from "react-icons/bs";
import {
  FaAmazon,
  FaCarSide,
  FaCat,
  FaDog,
  FaFedex,
  FaFire,
  FaUps,
} from "react-icons/fa";
import { LuBox, LuLassoSelect } from "react-icons/lu";
import { MdRecordVoiceOver } from "react-icons/md";

export function getIconForLabel(label: string, className?: string) {
  switch (label) {
    case "car":
      return <FaCarSide key={label} className={className} />;
    case "cat":
      return <FaCat key={label} className={className} />;
    case "bark":
    case "dog":
      return <FaDog key={label} className={className} />;
    case "fire_alarm":
      return <FaFire key={label} className={className} />;
    case "package":
      return <LuBox key={label} className={className} />;
    case "person":
      return <BsPersonWalking key={label} className={className} />;
    case "crying":
    case "laughter":
    case "scream":
    case "speech":
    case "yell":
      return <MdRecordVoiceOver key={label} className={className} />;
    default:
      return <LuLassoSelect key={label} className={className} />;
  }
}

export function getIconForSubLabel(label: string, className?: string) {
  switch (label) {
    case "amazon":
      return <FaAmazon key={label} className={className} />;
    case "fedex":
      return <FaFedex key={label} className={className} />;
    case "ups":
      return <FaUps key={label} className={className} />;
  }
}
