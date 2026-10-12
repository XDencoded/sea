import { motion } from 'motion/react'
import { Link } from 'react-router';

type LinkProps = {
  to: string;
	title: string;
};

export function AminLink({ to, title }: LinkProps) {
  return (
    <li >
      <Link to={to}><motion.span animate={{ fontSize: 16 }} whileHover={{ fontSize: 16 }}>{title}</motion.span></Link>
    </li>
  );
}
