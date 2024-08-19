// import {
//   useGetCitiesDataEnQuery,
//   useGetCitiesDataRuQuery,
// } from '@store/rtkQuery';
// import { useEffect } from 'react';
// import LoadingError from '@components/loading | error/LoadingError';
// import LoadingSpinner from '@components/loading | error/LoadingSpinner';
import { selectAllCitites } from '@slices/cities';
import { useAppSelector } from '@store/hooks';
import MainContentCityList from '@components/main/MainCityList';
// import Header from '@components/header/HeaderMain';
// import FooterMain from '@components/footer/FooterMain';
// import i18n from '../../i18n';
// import WelcomePageMain from '../routes/welcomePage/WelcomePageMain';

function MainPage() {
  const cityEntities = useAppSelector(selectAllCitites);
  //   const CurrentGreetingState = useAppSelector(
  //     (state) => state.cities.isGreetingButtonPressed
  //   );

  console.log('cityEntities', cityEntities);

  //   const {
  //     data: dataCitiesRu,
  //     error: errorCitiesRu,
  //     isLoading: isLoadingCitiesRu,
  //   } = useGetCitiesDataRuQuery();
  //   const {
  //     data: dataCitiesEn,
  //     error: errorCitiesEn,
  //     isLoading: isLoadingCitiesEn,
  //   } = useGetCitiesDataEnQuery();

  //   const dispatch = useAppDispatch();
  //   const citiesRuCollection = dataCitiesRu?.record.cities;
  //   const citiesEnCollection = dataCitiesEn?.record.cities;
  //   const currentLanguage = i18n.language;

  //   useEffect(() => {
  //     if (citiesRuCollection && currentLanguage === 'ru') {
  //       dispatch(setCities(citiesRuCollection));
  //     } else if (citiesEnCollection && currentLanguage === 'en') {
  //       dispatch(setCities(citiesEnCollection));
  //     }
  //   }, [dispatch, citiesRuCollection, currentLanguage, citiesEnCollection]);

  //   if (isLoadingCitiesRu || isLoadingCitiesEn) return <LoadingSpinner />;

  //   if (errorCitiesRu || errorCitiesEn)
  //     return (
  //       <LoadingError
  //         errorCitiesRu={errorCitiesRu}
  //         errorCitiesEn={errorCitiesEn}
  //       />
  //     );

  //   return CurrentGreetingState === false ? (
  //     <WelcomePageMain />
  //   ) : (
  //     <>
  //       <Header />
  //       <MainContentCityList cityEntities={cityEntities} />
  //       <FooterMain />
  //     </>
  //   );
  return <MainContentCityList cityEntities={cityEntities} />;
}
export default MainPage;
