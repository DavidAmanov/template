import React, { useRef, useEffect, useState } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import MapCss from "./Map.module.css";
import axios from "axios";
import Search from "../../img/search.svg";
import ConctactsData from "../ContactsData/ContactsData";

interface MapProp {
  orderPage: boolean;
}

const Map: React.FC<MapProp> = ({ orderPage }) => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<maptilersdk.Map | null>(null);
  const tokyo = { lng: 139.753, lat: 35.6844 };
  const [zoom] = useState(14);
  const [address, setAddress] = useState("");
  maptilersdk.config.apiKey = "aDAfZGEf5dpTp2OO02qx";

  useEffect(() => {
    if (map.current || !mapContainer.current) return; // stops map from intializing more than once

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [tokyo.lng, tokyo.lat],
      zoom: zoom,
    });

    new maptilersdk.Marker({ color: "#FF0000" })
      .setLngLat([139.7525, 35.6846])
      .addTo(map.current);
  }, [tokyo.lng, tokyo.lat, zoom]);

  const handleSearch = async () => {
    const geocodeUrl = `https://api.maptiler.com/geocoding/${encodeURIComponent(
      address
    )}.json?key=${maptilersdk.config.apiKey}`;
    try {
      const response = await axios.get(geocodeUrl);
      const { features } = response.data;
      if (features.length > 0) {
        const { center } = features[0];
        const [lng, lat] = center;
        if (map.current) {
          map.current.setCenter([lng, lat]);
          new maptilersdk.Marker({ color: "#FF0000" })
            .setLngLat([lng, lat])
            .addTo(map.current);
        }
      } else {
        alert("Address not found");
      }
    } catch (error) {
      console.error("Error fetching geocode data:", error);
    }
  };

  return (
    <div className={MapCss.grid__markup}>
      {orderPage && (
        <div className={MapCss.town__info}>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter an address"
            className={MapCss.town__input}
            onKeyDown={handleSearch}
          />
        </div>
      )}
      <div className={MapCss.map__wrap}>
        <div ref={mapContainer} className={MapCss.map} />
      </div>
    </div>
  );
};

export default Map;
