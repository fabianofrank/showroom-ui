import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { fetchReservationsSuccess } from '../redux/reservationsReducer';
import ReservationCard from './ReservationCard';
import '../Reservations.css';

const ReservationList = () => {
  const dispatch = useDispatch();
  const reservationList = useSelector((state) => state.reservations);
  const reservations = [];

  async function fetchData() {
    await axios.get('http://localhost:3000/api/v1/reservations').then((res) => {
      dispatch(fetchReservationsSuccess(res.data));
    });
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  reservationList.forEach((res) => reservations.push(
    <ReservationCard
      key={res.id}
      date={res.date}
      city={res.city}
      user={res.user_id}
      car={res.car_id}
    />,
  ));

  return (
    <div className="reservation-list">
      <h1 className="text-3xl font-bold mb-4 antialised">Reservations</h1>
      <h4 className="text-2xl antialised">Please review your reservations</h4>
      <div>{reservations}</div>
    </div>
  );
};

export default ReservationList;
