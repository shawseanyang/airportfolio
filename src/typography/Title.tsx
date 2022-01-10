import color from '../constants/colors';

type TitleProps = {
  children: React.ReactNode,
}

const Title = (props: TitleProps) =>
  <span style={{
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 'bold',
    fontSize: '30px',
    color: color.MAIN,
  }}>
    {props.children}
  </span>

export default Title