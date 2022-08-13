import QueueAnim from 'rc-queue-anim';
import { Link } from 'rc-scroll-anim';
import Arrow from '../../../images/right-arrow.png';
import './More.css';

function More() {
	return (
		<QueueAnim
			delay={500}
			type={'bottom'}
			className='queue-simple'
			duration={1000}>
			<Link to='about-section'>
				<img key={'a'} className='arrow' src={Arrow}></img>
			</Link>
		</QueueAnim>
	);
}

export default More;
