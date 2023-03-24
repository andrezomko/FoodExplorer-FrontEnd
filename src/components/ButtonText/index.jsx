import { Container } from './styles';

export function ButtonText({ to, children, ismyfavorites, ...rest }){
  return(
    <Container
      to={to}
      ismyfavorites={ismyfavorites}
    >
      <span>
        {children}
      </span>
    </Container>
  );
}