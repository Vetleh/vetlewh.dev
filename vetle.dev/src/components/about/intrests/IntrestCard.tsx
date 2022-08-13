import { Intrest } from '../../../data/intrests';
import './IntrestCard.css';
interface Props {
	intrest: Intrest;
}
function IntrestCard({ intrest }: Props) {
	return (
		<div
			className='intrest-card'
			style={{ borderTop: `5px solid ${intrest.color}` }}>
			<p className='intrest-card-header'>{intrest.name}</p>
			<p className='intrest-card-text'>{intrest.description}</p>
			<img
				className='intrest-card-image'
				src={`${process.env.PUBLIC_URL}/intrests/${intrest.imageUrl}`}></img>
		</div>
	);
}
export default IntrestCard;
