import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker,
} from 'react-google-maps';

const MapContainer = withScriptjs(
	withGoogleMap((props: any) => {
		console.log(props.location);
		return (
			<GoogleMap defaultZoom={1} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
				{props.isMarkerShown && <Marker position={props.location} />}
			</GoogleMap>
		);
	}),
);

export default MapContainer;
