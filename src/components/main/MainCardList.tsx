import { Card, ListGroup } from 'react-bootstrap';
import { City } from '@slices/cities';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TFunction } from 'i18next';

type cityItemProp = {
  cityItem: City;
  t: TFunction;
};

function MainCardList({ cityItem, t }: cityItemProp) {
  const navigate = useNavigate();
  const handleClick = (value: string) => {
    navigate(`/${value}`);
  };
  const cityRoute = cityItem.imgName.split('.')[0];
  const citiesPopulation = cityItem.population.toString();
  const citiesFoundatonDate = cityItem.foundation_date;

  return (
    <Card
      as={motion.div}
      initial={{
        opacity: 0,
        x: 50,
        y: -50,
      }}
      whileHover={{
        x: [0, -5, 5, -5, 5, 0],
        filter: 'saturate(150%)',
        boxShadow:
          '0 4px 8px 0 rgba(0, 0, 0, 0.8), 0 6px 20px 0 rgba(0, 0, 0, 0.8)',
        transition: { duration: 1, ease: 'easeInOut' },
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: true }}
      className="p-3 mb-5 bg-body rounded"
    >
      <Card.Img
        variant="top"
        width="300px"
        height="300px"
        src={`/src/assets/images/citiesIMG/${cityItem.imgName}`}
      />
      <Card.Body>
        <Card.Title>{cityItem.name}</Card.Title>
        <Card.Text>{cityItem.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          {t('cityInfo.Population', { number: citiesPopulation })}
        </ListGroup.Item>
        <ListGroup.Item>
          {t('cityInfo.FoundationDate', { date: citiesFoundatonDate })}
        </ListGroup.Item>
      </ListGroup>
      <Card.Body className="d-flex justify-content-center">
        <motion.button
          onClick={() => handleClick(cityRoute)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="btn btn-primary"
        >
          {t('cityInfo.moreDetails')}
        </motion.button>
      </Card.Body>
    </Card>
  );
}
export default MainCardList;
