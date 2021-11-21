import { useState } from 'react';
import MapContainer from './MapContainer';

const App = () => {
	const [location, setLocation] = useState({ lat: 0, lng: 0 });
	const [key, setKey] = useState(new Date().toISOString());

	const triggerRerender = () => setKey(new Date().toISOString());

	return (
		<div>
			<input
				type='text'
				name='lat'
				onChange={(e) =>
					setLocation({ ...location, lat: +parseInt(e.target.value) })
				}
				placeholder='Enter Latitude'
			/>
			<input
				type='text'
				name='lng'
				onChange={(e) =>
					setLocation({ ...location, lng: +parseInt(e.target.value) })
				}
				placeholder='Enter Longitude'
			/>
			<button onClick={triggerRerender}>Place on Map</button>
			{console.log(location)}
			<MapContainer
				key={key}
				location={location}
				isMarkerShown
				googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `400px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		</div>
	);
};

export default App;
