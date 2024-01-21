import { HTMLAttributes, ReactNode } from "react";
import "./styles/card.css";

type CardProps = {
  children: ReactNode;
};

const Card = ({ children }: CardProps) => {
  return <div className="card">{children}</div>;
};

type CardIconProps = {
  icon: ReactNode;
  label?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const CardIcon = ({ icon, label, ...restProps }: CardIconProps) => {
  return (
    <div className="card-icon" {...restProps}>
      {icon}
      {label && label}
    </div>
  );
};

type CardTitleProps = {
  children: ReactNode;
};

const CardTitle = ({ children }: CardTitleProps) => {
  return <p className="card-title">{children}</p>;
};

Card.Icon = CardIcon;
Card.Title = CardTitle;

export default Card;
