import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes/routes';
import { HomeContainer, StoriesButton } from './styles';
import Cover from '../../assets/Cover/Cover.png';

export interface HomeContainerProps {
  background: string;
}

export function Home() {
  const [hearts, setHearts] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Math.random().toString(36).substring(2, 9);

      setHearts((prev) => [...prev, id]);

      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h !== id));
      }, 2000);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <HomeContainer background={Cover}>
      <NavLink to={routes.stories}>
        <StoriesButton>
          Stories
          {hearts.map((id) => (
            <span
              key={id}
              className="heart"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random()}s`,
              }}
            >
              ❤️
            </span>
          ))}
        </StoriesButton>
      </NavLink>
    </HomeContainer>
  );
}
