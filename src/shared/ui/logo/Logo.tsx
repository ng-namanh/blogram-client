import logo from '@/shared/ui/assets/logo.svg';
import { Link } from 'react-router-dom';

type Props = {
  width?: number;
};

function Logo({ width }: Props) {
  return (
    <Link to="/">
      <img src={logo} alt="" width={width} height={200} />
    </Link>
  );
}
export default Logo;
