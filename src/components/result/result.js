import React from 'react';

import Button from '../button/button';
import Comparison from '../comparison/comparison';
import CalculatePercentage from '../../helpers/calculate-percentage';
import CalculateAdjective from '../../helpers/calculate-adjective';

import rent from './rent.svg';
import restaurant from './restaurant.svg';
import groceries from './groceries.svg';
import shopping from './shopping.svg';

import './result.css';

function Result({ home, away, salary, currency }) {
  const [
    homeName,
    ,
    homeRent,
    homeCOL,
    homeGroceries,
    homeRestaurant,
    homePurchasing,
  ] = home;
  const [
    awayName,
    ,
    awayRent,
    awayCOL,
    awayGroceries,
    awayRestaurant,
    awayPurchasing,
  ] = away;
  const newSalary = Math.round((salary / homeCOL) * awayCOL);
  const formattedSalary = newSalary.toLocaleString('en');

  const formattedHome = homeName.split(',')[0];
  const formattedAway = awayName.split(',')[0];

  const awayRentExample = Math.round((900 / homeRent) * awayRent);
  const awayGroceriesExample = Math.round((40 / homeGroceries) * awayGroceries);
  const awayRestaurantExample = Math.round(
    (60 / homeRestaurant) * awayRestaurant
  );

  const purchasingPercentage = CalculatePercentage(
    awayPurchasing,
    homePurchasing
  );

  return (
    <div className="pane">
      <div className="salary-info">
        <span>You'd have to earn at least</span>
        <span className="salary-info__result">
          {currency}
          {formattedSalary}
        </span>
        <span>to maintain the same standard of living</span>
      </div>

      <Button
        link="/choose-home"
        isDisabled={false}
        text="Edit Details"
        className="primary-btn primary-btn--result"
      />

      <Comparison
        home={formattedHome}
        away={formattedAway}
        homeValue={homeRent}
        awayValue={awayRent}
        homeEx="900pcm"
        awayEx={`${awayRentExample}pcm`}
        img={rent}
        heading="Rent"
        snippet={`Rent in ${formattedAway} is ${CalculateAdjective(
          900,
          awayRentExample
        )} compared to ${formattedHome}. A ${currency}900pcm property in ${formattedHome} would cost around ${currency}${awayRentExample}pcm in ${formattedAway}`}
      />

      <Comparison
        home={formattedHome}
        away={formattedAway}
        homeValue={homeGroceries}
        awayValue={awayGroceries}
        homeEx={`${currency}40`}
        awayEx={`${currency}${awayGroceriesExample}`}
        img={groceries}
        heading="Groceries"
        snippet={`Buying groceries in ${formattedAway} is ${CalculateAdjective(
          40,
          awayGroceriesExample
        )} compared to ${formattedHome}. A ${currency}40 shop in ${formattedHome} would cost around ${currency}${awayGroceriesExample} in ${formattedAway}`}
      />

      <Comparison
        home={formattedHome}
        away={formattedAway}
        homeValue={homeRestaurant}
        awayValue={awayRestaurant}
        homeEx={`${currency}60`}
        awayEx={`${currency}${awayRestaurantExample}`}
        img={restaurant}
        heading="Eating out"
        snippet={`Eating out in ${formattedAway} is ${CalculateAdjective(
          60,
          awayRestaurantExample
        )} compared to ${formattedHome}. A ${currency}60 meal out ${formattedHome} would cost around ${currency}${awayRestaurantExample} in ${formattedAway}`}
      />

      <Comparison
        home={formattedHome}
        away={formattedAway}
        homeValue={homePurchasing}
        awayValue={awayPurchasing}
        img={shopping}
        heading="Purchasing Power"
        snippet={`Represents local purchasing power in buying goods and services in a city. People who earn the average salary in ${formattedAway} can afford to buy on average ${Math.abs(
          purchasingPercentage
        )}% ${
          purchasingPercentage >= 0 ? 'more' : 'less'
        } goods and services than someone in ${formattedHome} on the average salary.`}
      />
    </div>
  );
}

export default Result;
