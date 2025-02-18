import React, { useContext, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { getProperty, removeBooking } from '../../utils/api';
import { PuffLoader } from 'react-spinners';
import { BsPeople, BsClock } from 'react-icons/bs';
import { TbCurrencyNaira } from 'react-icons/tb';
import { MdLocationPin } from 'react-icons/md';
import Map from '../../components/Map/Map';
import useAuthCheck from '../../hooks/useAuthCheck';
import { useAuth0 } from '@auth0/auth0-react';
import BookingModal from '../../components/BookingModal/BookingModal';
import UserDetailContext from '../../context/UserDetailContext';
import { Button } from '@mantine/core';
import { toast } from 'react-toastify';
import Heart from '../../components/Heart/Heart';
import './Property.css';

const Property = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];
  const { data, isLoading, isError } = useQuery(["resd", id], () => getProperty(id));
  
  const [modalOpened, setModalOpened] = useState(false);
  const { validateLogin } = useAuthCheck();
  const { user } = useAuth0();
  const { userDetails: { token, bookings }, setUserDetails } = useContext(UserDetailContext);

  const { mutate: cancelBooking, isLoading: cancelling } = useMutation({
    mutationFn: () => removeBooking(id, user?.email, token),
    onSuccess: () => {
      setUserDetails((prev) => ({
        ...prev,
        bookings: prev.bookings.filter((booking) => booking?.id !== id)
      }));
      toast.success("Booking cancelled", { position: 'bottom-right' });
    }
  });

  if (isLoading) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <PuffLoader />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <span>Error while fetching the property details</span>
        </div>
      </div>
    );
  }

  // WhatsApp URL with a pre-filled message
  const whatsappMessage = `Hello, I'm interested in the property: ${data?.title} located at ${data?.address}, ${data?.city}, ${data?.country}. Can you provide more details?`;
  const whatsappLink = `https://https://wa.link/n77hgv?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="wrapper">
      <div className="flexColStart paddings innerWidth property-container">
        {/* image */}
        <img src={data?.image} alt="home image" />

        <div className='flexCenter property-details'>
          {/* left */}
          <div className="flexColStart left">
            {/* head */}
            <div className="flexStart head">
              <span className='primaryText'>{data?.title}</span>
              <span className='orangeText' style={{ fontSize: '1.5rem' }}>₦ {data?.price}</span>
            </div>

            {/* facilities */}
            <div className="flexStart facilities">
              <div className="flexStart facility">
                <TbCurrencyNaira size={20} color="#1F3E72" />
                <span>{data?.facilities?.bathrooms}</span>
              </div>
              <div className="flexStart facility">
                <BsPeople size={20} color="#1F3E72" />
                <span>{data?.facilities.parkings} Partners</span>
              </div>
              <div className="flexStart facility">
                < BsClock size={20} color="#1F3E72" />
                <span>{data?.facilities.bedrooms} Years old</span>
              </div>
            </div>

            {/* description */}
            <span className="secondaryText" style={{ textAlign: "justify" }}>
              {data?.description}
            </span>

            {/* address */}
            <div className="flexStart" style={{ gap: "1rem" }}>
              <MdLocationPin size={25} />
              <span className="secondaryText">
                {data?.address} {data?.city} {data?.country}
              </span>
            </div>

            {/* booking button */}
            {bookings?.map((booking) => booking.id).includes(id) ? (
              <>
                <Button
                  variant="outline"
                  w={"100%"}
                  color="red"
                  onClick={() => cancelBooking()}
                  disabled={cancelling}
                >
                  <span>Cancel booking</span>
                </Button>
                <span>
                  Your visit already booked for date {bookings?.filter((booking) => booking?.id === id)[0].date}
                </span>
              </>
            ) : (
              <button
                className="button"
                onClick={() => {
                  validateLogin() && setModalOpened(true);
                }}
              >
                Book A Date
              </button>
            )}

            {/* WhatsApp Button */}
            <Button
              style={{ backgroundColor: '#25D366', color: 'white', marginTop: '1rem' }}
              component="a"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Message on WhatsApp
            </Button>

            <BookingModal
              opened={modalOpened}
              setOpened={setModalOpened}
              propertyId={id}
              email={user?.email}
            />
          </div>

          {/* right side */}
          <div className="map">
            <Map address={data?.address} city={data?.city} country={data?.country} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
