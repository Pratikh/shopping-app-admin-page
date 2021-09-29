import React, { useEffect, useState } from "react";

function Location() {
  const [longitude, setlongitude] = useState(null);
  const [lattitude, setlattitude] = useState(null);
  const [address, setaddress] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setlongitude(position.coords.longitude);
      setlattitude(position.coords.latitude);
    });
  }, []);
  useEffect(() => {
    if (longitude && lattitude) {
      fetch(
        `https://us1.locationiq.com/v1/reverse.php?key=pk.e6d1fde852928ce06b39b567a056afc3&lat=${lattitude}&lon=${longitude}&format=json`
      )
        .then((response) => response.json())
        .then((data) => {
          setaddress(data.display_name);
        });
    }
  }, [longitude, lattitude]);

  return (
    <div>
      <h3>{address}</h3>
    </div>
  );
}

export default Location;
